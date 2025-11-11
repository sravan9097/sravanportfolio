
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Twitter, Figma } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendEmail } from "@/lib/emailjs";
import { track } from "@vercel/analytics";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Send email notification to site owner
      const emailResult = await sendEmail({
        serviceId: import.meta.env.VITE_SELF_EMAILJS_SERVICE_ID,
        templateId: import.meta.env.VITE_SELF_EMAILJS_TEMPLATE_ID,
        templateParams: {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
        },
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      });

      if (!emailResult.success) {
        throw new Error(emailResult.error || "Failed to send email");
      }

      // Track successful contact submission
      track('contact_submit', {
        name_length: values.name.length,
        subject_length: values.subject.length,
      });

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: error instanceof Error ? error.message : "Your message couldn't be sent. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section className="section-padding" id="contact">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary-light">Let’s create meaningful experiences together.</h2>
            {/* <p className="text-primary-light">I’m open to new projects, collaborations, and full-time opportunities. If you’re hiring or looking for a UX designer, let’s connect.</p> */}
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 md:order-1 order-2 space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-primary mb-1">Drop a mail</h3>
                  <a href="mailto:sravan.mulugurthy@gmail.com" className="text-primary-light hover:text-accent transition-colors">
                    sravan.mulugurthy@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-primary mb-1">Whatsapp/Call me</h3>
                  <a href="tel:+918008757502" className="text-primary-light hover:text-accent transition-colors">
                    +91 8008757502
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-primary mb-1">Currently based in</h3>
                  <p className="text-primary-light">
                    Hyderabad, Telangana, India
                  </p>
                </div>
              </div>
              
              <div className="pt-6">
                <h3 className="font-medium text-primary mb-3">Connect with me on</h3>
                <div className="flex gap-4 flex-wrap">
                  <a href="https://www.linkedin.com/in/sravankumar9092/" target="_blank" rel="noopener noreferrer" className="bg-accent/10 p-3 rounded-full hover:bg-accent/20 transition-colors" title="https://www.linkedin.com/in/sravankumar9092/">
                    <img 
                      src="/LinkedIn_icon.svg" 
                      alt="LinkedIn" 
                      className="w-5 h-5"
                    />
                  </a>
                  {/* <a href="https://instagram.com/sravan_photography" target="_blank" rel="noopener noreferrer" className="bg-accent/10 p-3 rounded-full hover:bg-accent/20 transition-colors" title="https://instagram.com/sravan_photography">
                    <img 
                      src="/Instagram_logo.svg" 
                      alt="Instagram" 
                      className="w-5 h-5"
                    />
                  </a> */}
                  <a href="https://github.com/sravan9097" target="_blank" rel="noopener noreferrer" className="bg-accent/10 p-3 rounded-full hover:bg-accent/20 transition-colors" title="https://github.com/sravan9097">
                    <img 
                      src="/github-color-svgrepo-com.svg" 
                      alt="GitHub" 
                      className="w-5 h-5"
                    />
                  </a>
                  <a href="https://dribbble.com/sra1van" target="_blank" rel="noopener noreferrer" className="bg-accent/10 p-3 rounded-full hover:bg-accent/20 transition-colors" title="https://www.dribbble.com/sravankumar">
                    <img 
                      src="/dribbble-seeklogo.svg" 
                      alt="Dribbble" 
                      className="w-5 h-5"
                    />
                  </a>
                  <a href="https://lottiefiles.com/sravan" target="_blank" rel="noopener noreferrer" className="bg-accent/10 p-3 rounded-full hover:bg-accent/20 transition-colors" title="https://lottiefiles.com/sravan">
                    <img 
                      src="/LF_Secondary_Logomark_Full color.svg" 
                      alt="LottieFiles" 
                      className="w-5 h-5"
                    />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 md:order-2 order-1">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-primary">Your full name</FormLabel>
                          <FormControl>
                            <input
                              {...field}
                              className="w-full px-4 py-2 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
                              placeholder="Hi, I’m…"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-primary">Your email</FormLabel>
                          <FormControl>
                            <input
                              {...field}
                              type="email"
                              className="w-full px-4 py-2 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
                              placeholder="Drop your email here"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-primary">Project, role, or collaboration</FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="w-full px-4 py-2 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
                            placeholder="Let’s talk about…"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-primary">How can I help?</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={5}
                            className="w-full px-4 py-2 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
                            placeholder="Share your thoughts, ideas, or job details here"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="bg-accent hover:bg-accent-hover text-white w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

