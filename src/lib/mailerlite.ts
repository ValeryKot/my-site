/**
 * MailerLite v4 API Service
 * Modern MailerLite API with CORS support for client-side usage
 */

interface MailerLiteFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface MailerLiteResponse {
  success: boolean;
  data?: unknown;
  error?: string;
}

// Type guard to check if error is a standard Error object
function isErrorWithNameAndMessage(error: unknown): error is Error {
  return error instanceof Error && 'name' in error && 'message' in error;
}

// Type guard to check for TypeError with specific message
function isNetworkError(error: unknown): error is Error {
  return (
    isErrorWithNameAndMessage(error) &&
    error.name === 'TypeError' &&
    error.message.includes('Failed to fetch')
  );
}

/**
 * Submit form data to MailerLite API v4 (CORS compatible)
 * @param formData - Form data to submit
 * @returns Promise with response status
 */
export async function submitToMailerLite(
  formData: MailerLiteFormData
): Promise<MailerLiteResponse> {
  const API_KEY = import.meta.env.VITE_MAILERLITE_API_KEY;
  
  const GROUP_ID = import.meta.env.VITE_MAILERLITE_GROUP_ID || '';

  if (!API_KEY) {
    console.warn('MailerLite API key not configured');
    return {
      success: false,
      error: 'MailerLite is not configured. Please check your environment variables.'
    };
  }

  try {
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        email: formData.email,
        fields: {
          name: formData.name,
          subject: formData.subject || '',
          message: formData.message || '',
          source: 'portfolio-contact-form',
          submitted_at: new Date().toISOString()
        },
        groups: GROUP_ID ? [GROUP_ID] : [],
        status: 'active'
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return { 
        success: true, 
        data: {
          ...data,
          message: 'Form submitted successfully!'
        }
      };
    }

    let errorMessage = 'Failed to submit form';
    
    if (data.message?.includes('already subscribed')) {
      errorMessage = 'You are already subscribed. Thank you!';
    } else if (data.message?.includes('invalid email')) {
      errorMessage = 'Please enter a valid email address';
    } else if (data.message) {
      errorMessage = data.message;
    }

    return {
      success: false,
      error: errorMessage
    };
    
  } catch (error: unknown) {
    console.error('MailerLite submission error:', error);
    
    let errorMessage = 'An error occurred while submitting the form';
    
    // Use type guard to safely check error properties
    if (isNetworkError(error)) {
      errorMessage = 'Network error. Please check your connection and try again.';
    }
    
    return {
      success: false,
      error: errorMessage
    };
  }
}

/**
 * Get MailerLite groups list (optional, for debugging)
 */
export async function getMailerLiteGroups(): Promise<MailerLiteResponse> {
  const API_KEY = import.meta.env.VITE_MAILERLITE_API_KEY;

  if (!API_KEY) {
    return { success: false, error: 'API key not configured' };
  }

  try {
    const response = await fetch('https://connect.mailerlite.com/api/groups', {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Accept': 'application/json'
      }
    });

    const data = await response.json();
    
    if (response.ok) {
      return { success: true, data };
    }
    
    return { success: false, error: data.message };
  } catch (error: unknown) {
    console.error('MailerLite groups error:', error);
    return { success: false, error: 'Failed to fetch groups' };
  }
}