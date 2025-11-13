
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  
  return (
    <section className="section-padding" id="contact">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-primary-light">Let’s create meaningful experiences together.</h2>
            {/* <p className="text-primary-light">I’m open to new projects, collaborations, and full-time opportunities. If you’re hiring or looking for a UX designer, let’s connect.</p> */}
          </div>
          
          <div className="max-w-3xl mx-auto mb-2">
            <div className="text-center p-4 md:p-8 bg-card border border-border rounded-lg">
              <p className="text-lg text-primary-light mb-2">
                Get in touch with me at{" "}
                
              </p>
              <p >
              <a 
                  href="mailto:sravan.mulugurthy@gmail.com" 
                  className=" text-base md:text-xl text-accent font-semibold hover:text-accent-hover transition-colors underline decoration-2 underline-offset-4"
                >
                  sravan.mulugurthy@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto space-y-6 flex flex-col items-center justify-center">
            {/* <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-full">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-medium text-primary mb-1">Drop a mail</h3>
                <a href="mailto:sravan.mulugurthy@gmail.com" className="text-primary-light hover:text-accent transition-colors">
                  sravan.mulugurthy@gmail.com
                </a>
              </div>
            </div> */}
            {/* <div className="flex flex-row gap-4 justify-center items-center ">
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
            </div> */}
            
            <div className="pt-6 flex flex-col items-center justify-center">
              <h3 className="text-base md:text-xl font-medium text-primary mb-3">My socials</h3>
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
        </div>
      </div>
    </section>
  );
};

export default Contact;

