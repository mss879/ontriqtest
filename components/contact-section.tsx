'use client';

import { memo } from 'react';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, User, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export const ContactSection = memo(function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white pt-32 pb-24 text-slate-900 md:pt-40 md:pb-28" aria-labelledby="contact-heading">
       <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-16 px-4 md:px-6 lg:gap-20">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="space-y-4">
            <h1 id="contact-heading" className="text-[44px] font-semibold tracking-tight text-slate-900 md:text-6xl lg:text-7xl leading-[1.1]">
              Get in <span className="text-slate-400">Touch.</span>
            </h1>
            <p className="max-w-[800px] text-base text-slate-500 md:text-lg leading-relaxed">
               We're here to help you streamline your operations and grow your business. Reach out to us directly or fill out the form.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Left Column: Contact Info Card */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10"
            >
                 {/* Content similar to bento grid card */}
                 <address className="flex flex-col gap-10 h-full justify-between not-italic">
                    <div className="space-y-8">
                        {/* Email */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-3 text-slate-900 font-semibold text-xl">
                                <div className="p-2 rounded-full bg-orange-100 text-[#F75834]" aria-hidden="true">
                                    <Mail className="h-5 w-5" />
                                </div>
                                Company Email
                            </div>
                            <p className="text-slate-500 pl-12">
                              <a href="mailto:info@ontriq.com" className="hover:text-[#F75834] transition-colors">
                                info@ontriq.com
                              </a>
                            </p>
                        </div>

                        {/* Address */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-3 text-slate-900 font-semibold text-xl">
                                <div className="p-2 rounded-full bg-orange-100 text-[#F75834]" aria-hidden="true">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                Company Address
                            </div>
                            <div className="text-slate-500 pl-12">
                                <p>107 Colombo - Galle Main Rd,</p>
                                <p>Dehiwala-Mount Lavinia Sri Lanka</p>
                            </div>
                        </div>

                        {/* Key Contacts */}
                         <div className="space-y-6">
                            <div className="flex items-center gap-3 text-slate-900 font-semibold text-xl">
                                <div className="p-2 rounded-full bg-orange-100 text-[#F75834]" aria-hidden="true">
                                    <User className="h-5 w-5" />
                                </div>
                                Key Contacts
                            </div>
                            <div className="pl-12 space-y-6">
                                <div>
                                    <p className="font-medium text-slate-900">Abdul Rahuman</p>
                                    <p className="text-sm text-[#F75834] mb-1">VP Operations / Director</p>
                                    <p className="text-sm text-slate-500">
                                      <a href="tel:+94779996940" className="hover:text-[#F75834] transition-colors">077 999 6940</a>
                                    </p>
                                    <p className="text-sm text-slate-500">
                                      <a href="mailto:abdul@ontriq.com" className="hover:text-[#F75834] transition-colors">abdul@ontriq.com</a>
                                    </p>
                                </div>
                                <div>
                                    <p className="font-medium text-slate-900">Arafath Dawood</p>
                                    <p className="text-sm text-[#F75834] mb-1">Director Operations</p>
                                    <p className="text-sm text-slate-500">
                                      <a href="tel:+94777740041" className="hover:text-[#F75834] transition-colors">077 774 0041</a>
                                    </p>
                                    <p className="text-sm text-slate-500">
                                      <a href="mailto:arafath@ontriq.com" className="hover:text-[#F75834] transition-colors">arafath@ontriq.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </address>
            </motion.div>

            {/* Right Column: Form Card */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-7 relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm"
            >
                <form className="space-y-6" aria-label="Contact form">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="first-name" className="text-slate-700">First Name</Label>
                            <Input id="first-name" name="firstName" placeholder="Enter your first name" className="bg-slate-50 border-slate-200 focus-visible:ring-[#F75834]" autoComplete="given-name" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="last-name" className="text-slate-700">Last Name</Label>
                            <Input id="last-name" name="lastName" placeholder="Enter your last name" className="bg-slate-50 border-slate-200 focus-visible:ring-[#F75834]" autoComplete="family-name" required />
                        </div>
                    </div>
                    
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-slate-700">Email</Label>
                            <Input id="email" name="email" type="email" placeholder="Enter your email" className="bg-slate-50 border-slate-200 focus-visible:ring-[#F75834]" autoComplete="email" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone" className="text-slate-700">Phone</Label>
                            <Input id="phone" name="phone" type="tel" placeholder="Enter your phone" className="bg-slate-50 border-slate-200 focus-visible:ring-[#F75834]" autoComplete="tel" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message" className="text-slate-700">Message</Label>
                        <Textarea 
                            id="message"
                            name="message"
                            placeholder="How can we help you?" 
                            className="min-h-[150px] bg-slate-50 border-slate-200 resize-none focus-visible:ring-[#F75834]"
                            required
                        />
                    </div>

                    <button 
                        type="submit"
                        className="group inline-flex items-center gap-3 rounded-full bg-[#F75834] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#e04826] focus:outline-none focus:ring-2 focus:ring-[#F75834] focus:ring-offset-2"
                    >
                        Send Message
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </button>
                </form>
            </motion.div>
        </div>
       </div>
    </section>
  )
});
