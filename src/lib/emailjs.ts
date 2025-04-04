
import emailjs from 'emailjs';

interface SendEmailParams {
  serviceId: string;
  templateId: string;
  userId: string;
  templateParams: Record<string, unknown>;
}

export const sendEmail = async ({
  serviceId,
  templateId,
  userId,
  templateParams,
}: SendEmailParams): Promise<{ success: boolean; data?: any; error?: string }> => {
  try {
    const result = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      userId
    );
    
    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.error('EmailJS error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send email',
    };
  }
};
