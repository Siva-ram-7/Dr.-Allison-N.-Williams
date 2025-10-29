
'use client'

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, HeartPulse, UserCheck, CalendarCheck, PhoneCall, Plane, CheckCircle, Languages, Hospital, Mail, MapPin, Clock, ShieldCheck, Users, Globe, BookUser, Layers, Stethoscope, BriefcaseMedical, Baby, GitBranch, Link2, LifeBuoy, CircleCheckBig } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import placeholderImages from "@/lib/placeholder-images.json";
import { useSearchParams } from 'next/navigation'
import React from "react";

const education = [
  "MD, Howard University College of Medicine (2000)",
  "Internship & Residency in Family Medicine, University of Maryland, Baltimore (2000–2003)",
];

const highlights = [
    "Owner of Crofton Family Practice since 2018, continuing a legacy dating to the 1960s",
    "Board-certified in Family Medicine, with special interests in cardiovascular care, endocrinology, pulmonary health, and allergy-related respiratory issues",
    "Medical Director of the on-site lab, managing coagulation therapies (e.g., for atrial fibrillation)",
    "Dedicated community physician; offers house calls within a five-mile radius of Crofton Family Practice",
];

const languages = ["English", "Hindi", "Malayalam", "Tamil"];
const affiliations = ["Luminis Health Anne Arundel Medical Center", "UM Baltimore Washington Medical Center"];

const benefits = [
  {
    icon: BookUser,
    title: "Customized Wellness Plan",
    description: "Your care begins with an in-depth health assessment and personalized wellness plan built around your unique goals, risk factors, and lifestyle.",
  },
  {
    icon: CalendarCheck,
    title: "Same-Day or Next-Day Appointments",
    description: "Skip the wait — receive prompt attention when you need it most.",
  },
  {
    icon: PhoneCall,
    title: "24/7 Access to Dr. Williams",
    description: "Contact Dr. Williams directly for urgent concerns, medical advice, or ongoing care support at any time.",
  },
  {
    icon: Plane,
    title: "Travel Advantage",
    description: "Receive assistance connecting with MDVIP-affiliated physicians nationwide when traveling for work or leisure.",
  },
  {
    icon: Users,
    title: "Family Plan Options",
    description: "Comprehensive family healthcare designed for all ages — ensuring wellness across generations.",
  },
  {
    icon: Globe,
    title: "Personal Website & App",
    description: "Stay connected through your secure MDVIP patient portal and mobile app for health updates, appointments, and progress tracking.",
  }
];


const faqs = [
  {
    question: "What is concierge medicine?",
    answer: "Concierge medicine is a membership-based healthcare model where patients pay an annual fee. In return, physicians care for fewer patients, allowing them to provide more personalized, high-touch services and longer appointment times.",
  },
  {
    question: "Is the MDVIP annual fee covered by insurance?",
    answer: "No, the annual membership fee (approx. $2,100) funds an advanced wellness program; standard medical services are billed through insurance.",
  },
  {
    question: "How does this work with my existing health insurance?",
    answer: "Our practice continues to accept your PPO or Medicare insurance for office visits and procedures. The annual fee covers the enhanced services not typically reimbursed by insurance, such as the comprehensive wellness program and 24/7 physician access.",
  },
  {
    question: "What if I need to see a specialist?",
    answer: "Dr. Williams will personally help coordinate your care with top specialists, ensuring a seamless experience and clear communication between all your healthcare providers.",
  },
];

const testimonials = placeholderImages.testimonials;

const whyChooseBenefits = [
    { text: "More time with your doctor", icon: Clock },
    { text: "Comprehensive annual wellness exams", icon: ShieldCheck },
    { text: "Early detection and preventive testing", icon: Stethoscope },
    { text: "Same-day or next-day scheduling", icon: CalendarCheck },
    { text: "24/7 physician access", icon: PhoneCall },
    { text: "Focus on lifestyle medicine and longevity", icon: HeartPulse }
];

const StarRating = () => (
  <div className="flex gap-1 text-yellow-400">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="h-5 w-5 fill-current" />
    ))}
  </div>
);

function WellnessSection() {
    const searchParams = useSearchParams();
    const tab = searchParams.get('tab');
    const [activeTab, setActiveTab] = React.useState(tab || "wellness-testing");
  
    React.useEffect(() => {
      if (tab && tab !== activeTab) {
        setActiveTab(tab);
      }
    }, [tab, activeTab]);

    return (
        <section id="wellness" className="bg-secondary/20 subtle-bg">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Comprehensive Wellness & Preventive Screenings</h2>
            <p className="text-lg text-muted-foreground mt-4">
              Dr. Williams’ MDVIP practice includes a series of advanced diagnostic screenings and
              preventive evaluations, helping identify potential health issues early and maintain optimal
              well-being.
            </p>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto animate-fade-in-up">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto md:h-12">
              <TabsTrigger value="wellness-testing" className="py-2.5">Advanced Wellness Testing</TabsTrigger>
              <TabsTrigger value="primary-care" className="py-2.5">Traditional Primary Care</TabsTrigger>
              <TabsTrigger value="specialized-services" className="py-2.5">Medicare & Specialized Services</TabsTrigger>
            </TabsList>
            <TabsContent value="wellness-testing" className="mt-8">
              <Card>
                <CardContent className="p-6 grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="font-headline text-xl font-bold mb-4">Advanced Wellness Testing</h3>
                    <p className="text-muted-foreground mb-4">These tests provide valuable insight into cardiovascular, respiratory, and metabolic health — the foundation for your Customized Wellness Plan.</p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3"><HeartPulse className="h-5 w-5 text-primary" /> Vascular Screening</li>
                        <li className="flex items-center gap-3"><LifeBuoy className="h-5 w-5 text-primary" /> Hearing & Vision Testing</li>
                        <li className="flex items-center gap-3"><Stethoscope className="h-5 w-5 text-primary" /> Pulmonary Function Testing</li>
                        <li className="flex items-center gap-3"><Layers className="h-5 w-5 text-primary" /> Comprehensive Weight Analysis</li>
                    </ul>
                  </div>
                   <div className="relative h-64 rounded-lg overflow-hidden">
                     <Image src={placeholderImages.wellness.lab.src} alt={placeholderImages.wellness.lab.alt} fill className="object-cover" data-ai-hint={placeholderImages.wellness.lab.hint} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="primary-care" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <h3 className="font-headline text-xl font-bold">Traditional Primary Care Services</h3>
                        <p className="text-muted-foreground">Dr. Williams continues to provide comprehensive family medicine for patients aged 5 and above, offering compassionate, continuous care for all genders and life stages. Her approach integrates traditional medical care with proactive wellness planning — focusing on both treatment and prevention.</p>
                        <h4 className="font-headline text-lg font-semibold">Areas of Expertise:</h4>
                         <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                          <li>Cancer Prevention</li>
                          <li>Hormonal and Sexual Health</li>
                          <li>Behavioral & Emotional Health</li>
                          <li>Pain Management</li>
                          <li>Chronic Disease Care (Diabetes, Hypertension, Asthma, etc.)</li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-headline text-lg font-semibold mb-4">Medication & Supplement Support</h4>
                        <p className="text-muted-foreground mb-4">Seamless integration for prescription management, nutraceuticals, and wellness products.</p>
                        <div className="space-y-4">
                            <Button asChild variant="outline" className="w-full justify-start gap-3"><a href="https://us.fullscript.com/login" target="_blank" rel="noopener noreferrer"><GitBranch /><span>Order supplements on <b>Fullscript</b></span><ArrowRight className="ml-auto" /></a></Button>
                            <Button asChild variant="outline" className="w-full justify-start gap-3"><a href="https://repeatmd.com/book-a-demo" target="_blank" rel="noopener noreferrer"><BriefcaseMedical /><span>Access treatments on <b>RepeatMD</b></span><ArrowRight className="ml-auto" /></a></Button>
                        </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="specialized-services" className="mt-8">
              <Card>
                 <CardContent className="p-6 grid md:grid-cols-2 gap-8 items-center">
                   <div>
                    <h3 className="font-headline text-xl font-bold mb-4">Medicare & Specialized Services</h3>
                    <p className="text-muted-foreground mb-4">Dr. Williams proudly supports the health of older adults through Medicare-focused wellness and chronic care management, emphasizing prevention, independence, and long-term quality of life.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Baby className="h-5 w-5 text-primary mt-1 shrink-0" /><div><span className="font-semibold">Medically Supervised Weight Management</span><p className="text-sm text-muted-foreground">Physician-directed plans for safe and sustainable results.</p></div></li>
                        <li className="flex items-start gap-3"><BookUser className="h-5 w-5 text-primary mt-1 shrink-0" /><div><span className="font-semibold">Advanced Care Planning</span><p className="text-sm text-muted-foreground">Guidance for making informed, proactive healthcare decisions.</p></div></li>
                        <li className="flex items-start gap-3"><Plane className="h-5 w-5 text-primary mt-1 shrink-0" /><div><span className="font-semibold">Transportation Assistance via Lyft</span><p className="text-sm text-muted-foreground">Convenient options for reliable access to care.</p></div></li>
                        <li className="flex items-start gap-3"><HeartPulse className="h-5 w-5 text-primary mt-1 shrink-0" /><div><span className="font-semibold">Comprehensive Laboratory Testing</span><p className="text-sm text-muted-foreground">In partnership with Cleveland Heart Lab for early disease detection.</p></div></li>
                    </ul>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                     <Image src={placeholderImages.wellness.seniorCare.src} alt={placeholderImages.wellness.seniorCare.alt} fill className="object-cover" data-ai-hint={placeholderImages.wellness.seniorCare.hint} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    )
}

function PageContent() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section 
        id="home"
        className="relative bg-background parallax-bg" 
        style={{backgroundImage: `url(${placeholderImages.hero.doctorOffice.src})`}}
        data-ai-hint={placeholderImages.hero.doctorOffice.hint}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-6 py-16 md:py-32 lg:py-40">
          <div className="max-w-4xl text-center mx-auto">
            <div className="space-y-6 animate-fade-in-up text-white">
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold">
                Dr. Allison N. Williams, MD
              </h1>
              <p className="text-xl font-semibold text-primary">Crofton Family Practice – Now Partnered with MDVIP</p>
              <p className="text-lg text-white/90">
                Redefining Primary Care with Personalized Wellness. At Crofton Family Practice, Dr. Allison N. Williams, MD, brings a new level of personalized, preventive, and proactive care through her partnership with MDVIP.
              </p>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <h2 className="font-headline text-2xl font-bold mb-2">MDVIP – A Customized Approach to Wellness</h2>
                <p className="text-white/80">Membership with Dr. Williams’ MDVIP-affiliated practice offers you a tailored, concierge-style healthcare experience. You’ll enjoy direct access, enhanced preventive screenings, and a close doctor-patient partnership designed to keep you thriving.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="https://www.mdvip.com/doctors/AllisonWilliamsMD" target="_blank" rel="noopener noreferrer">Become a Member</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                  <Link href="/#concierge-care">Learn About MDVIP <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
       {/* About Dr. Williams Section */}
       <section id="about" className="bg-background subtle-bg">
        <div className="container mx-auto px-6 py-16 md:py-24">
            <div className="text-center mb-12 animate-fade-in-up">
                <h2 className="font-headline text-3xl md:text-4xl font-bold">Meet Dr. Allison N. Williams, MD</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="relative h-[450px] md:h-full rounded-lg overflow-hidden shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <Image
                  src={placeholderImages.about.drWilliams.src}
                  alt={placeholderImages.about.drWilliams.alt}
                  fill
                  className="object-cover"
                  data-ai-hint={placeholderImages.about.drWilliams.hint}
                />
              </div>
              <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <Card className="bg-background shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">Educational Background &amp; Training</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {education.map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CircleCheckBig className="h-5 w-5 text-accent" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-background shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">Professional Highlights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {highlights.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CircleCheckBig className="h-5 w-5 text-accent shrink-0 mt-1" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <Card className="bg-background shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">Languages</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-3">
                            <Languages className="h-5 w-5 text-accent" />
                            <p className="text-muted-foreground">{languages.join(', ')}</p>
                        </div>
                    </CardContent>
                    </Card>

                    <Card className="bg-background shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">Affiliations</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                        {affiliations.map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                            <Hospital className="h-5 w-5 text-accent" />
                            <span className="text-muted-foreground">{item}</span>
                            </li>
                        ))}
                        </ul>
                    </CardContent>
                    </Card>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Why Concierge Medicine Section */}
      <section id="concierge-care" className="container mx-auto px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Exclusive MDVIP Member Benefits</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Dr. Williams’s MDVIP-affiliated practice offers a healthcare experience built around your lifestyle and needs:
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-t-4 border-primary bg-background shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="flex flex-row items-center gap-4">
                <benefit.icon className="h-10 w-10 text-primary" />
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <WellnessSection />

      {/* Why Choose Dr. Williams Section */}
      <section id="why-choose" className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Patients Choose Dr. Williams</h2>
            <p className="text-lg text-muted-foreground mt-4">
              Dr. Williams believes medicine should be personal, preventive, and empowering. Her smaller MDVIP practice size allows more one-on-one time, deeper connections, and individualized plans that prioritize prevention and long-term wellness.
            </p>
             <div className="mt-8 grid grid-cols-2 gap-6">
              {whyChooseBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <benefit.icon className="h-6 w-6 text-primary" />
                  <span className="text-muted-foreground">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg animate-fade-in-up" style={{animationDelay: '0.1s'}}>
             <Image src={placeholderImages.whyChoose.doctorPatient.src} alt={placeholderImages.whyChoose.doctorPatient.alt} fill className="object-cover" data-ai-hint={placeholderImages.whyChoose.doctorPatient.hint} />
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section id="testimonials" className="bg-secondary/20 subtle-bg">
        <div className="container mx-auto px-6 py-16 md:py-24">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">See What Patients Are Saying</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                <Card key={index} className="flex flex-col bg-background shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 flex flex-col flex-grow">
                    <StarRating />
                    <blockquote className="mt-4 text-muted-foreground italic flex-grow">
                    "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-4 mt-6">
                    <Avatar>
                        <AvatarImage src={testimonial.src} alt={testimonial.name} data-ai-hint={testimonial.hint} width={48} height={48} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                    </div>
                </CardContent>
                </Card>
            ))}
            </div>
        </div>
      </section>

      {/* Contact Section */}
       <section id="contact" className="relative parallax-bg" style={{backgroundImage: `url(${placeholderImages.contact.interior.src})`}} data-ai-hint={placeholderImages.contact.interior.hint}>
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />
        <div className="relative container mx-auto px-6 py-16 md:py-24">
           <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="font-headline text-3xl mdd:text-4xl font-bold text-primary-foreground">Get In Touch</h2>
                <p className="text-lg text-primary-foreground/80 mt-4 max-w-3xl mx-auto">
                  We're here to answer your questions about our practice and the MDVIP program. Reach out to us today.
              </p>
          </div>
          <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            
            <div className="lg:col-span-2 space-y-8">
              <Card className="animate-fade-in-up bg-background/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1" style={{ animationDelay: '0.1s' }}>
                  <CardHeader>
                      <CardTitle className="font-headline text-foreground">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-muted-foreground">
                      <div className="flex items-start gap-4">
                        <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
                        <span>1684 Village Green, Lower Level<br />Crofton, MD 21114</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <PhoneCall className="h-5 w-5 text-primary shrink-0" />
                        <a href="tel:410-424-5348" className="hover:text-primary">410-424-5348</a>
                      </div>
                      <div className="flex items-center gap-4">
                        <Mail className="h-5 w-5 text-primary shrink-0" />
                        <a href="mailto:info@croftoncare.com" className="hover:text-primary">info@croftoncare.com</a>
                      </div>
                       <div className="flex items-center gap-4 pt-2">
                        <Link2 className="h-5 w-5 text-primary shrink-0" />
                        <a href="https://www.mdvip.com/doctors/AllisonWilliamsMD" target="_blank" rel="noopener noreferrer" className="hover:text-primary font-semibold">mdvip.com/AllisonWilliamsMD</a>
                      </div>
                  </CardContent>
              </Card>

              <Card className="animate-fade-in-up bg-background/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1" style={{ animationDelay: '0.2s' }}>
                  <CardHeader>
                      <CardTitle className="font-headline text-foreground">Practice Location &amp; Hours</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                      <div className="flex items-start gap-4 text-muted-foreground">
                        <Clock className="h-5 w-5 text-primary mt-1 shrink-0" />
                        <div>
                          <p>Monday: 7:45 AM – 5:30 PM</p>
                          <p>Tuesday–Thursday: 7:45 AM – 4:30 PM</p>
                          <p>Friday: 7:45 AM – 12:00 PM</p>
                        </div>
                      </div>
                      <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
                          <Image
                              src={placeholderImages.contact.map.src}
                              alt={placeholderImages.contact.map.alt}
                              width={placeholderImages.contact.map.width}
                              height={placeholderImages.contact.map.height}
                              className="object-cover"
                              data-ai-hint={placeholderImages.contact.map.hint}
                          />
                      </div>
                  </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-3 self-start">
              <Card className="animate-fade-in-up bg-background/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1" style={{ animationDelay: '0.3s' }}>
                  <CardHeader>
                    <CardTitle className="font-headline text-foreground">Send Us a Message</CardTitle>
                    <CardDescription>
                      Have a question? Fill out the form below and we'll be in touch.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground subtle-bg">
        <div className="container mx-auto px-6 py-16 text-center animate-fade-in-up">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Join Dr. Williams’ MDVIP-Affiliated Practice</h2>
          <p className="text-lg mt-4 max-w-3xl mx-auto text-primary-foreground/80">
            Take charge of your health with a doctor who knows you — not just your symptoms. Experience the convenience, compassion, and care of MDVIP with Dr. Allison Williams today.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8">
            <a href="https://www.mdvip.com/doctors/AllisonWilliamsMD" target="_blank" rel="noopener noreferrer">Become an MDVIP Member</a>
          </Button>
        </div>
      </section>
    </div>
  );
}

export default function Home() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <PageContent />
        </React.Suspense>
    )
}