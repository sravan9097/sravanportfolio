
import emailjs from 'emailjs-com';

interface SendEmailParams {
  serviceId: string;
  templateId: string;
  templateParams: Record<string, unknown>;
  publicKey: string;
}

export const sendEmail = async ({
  serviceId,
  templateId,
  templateParams,
  publicKey,
}: SendEmailParams): Promise<{ success: boolean; data?: any; error?: string }> => {
  try {
    const result = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
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
