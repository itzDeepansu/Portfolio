"use client"
import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Package, 
  ShoppingCart, 
  CreditCard, 
  ArrowRight,
  Database,
  Code,
  Layout,
  ExternalLink,
  GitFork,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen text-white font-jetbr">
      {/* Navigation Bar */}
      <nav className="glass fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center">
              <span className="font-bold text-white">S</span>
            </div>
            <span className="text-xl font-bold">ShopNi</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
            <a href="#tech" className="hover:text-blue-400 transition-colors">Tech Stack</a>
            <a href="#demo" className="hover:text-blue-400 transition-colors">Demo</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          <Button href="#demo" className="button-outline hidden md:block hover:bg-blue-400 hover:text-white">
            Try Demo
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 min-h-[90dvh] flex items-center">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-start gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center">
                  <span className="font-bold text-2xl text-white">S</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold">ShopNi</h1>
              </div>
              
              <h2 className="text-2xl md:text-4xl font-bold leading-tight text-gradient animate-gradient-shift">
                Seamless Shopping,<br />Smarter Experience
              </h2>
              
              <p className="text-lg text-gray-300 md:pr-12">
                A full-stack eCommerce platform with cutting-edge features, 
                built with modern technologies for optimal performance and user experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#features" className="button-glow group">
                  Explore the Project
                  <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
                <a href="#demo" className="button-outline">
                  Live Demo
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              {/* Device mockup */}
              <div className="relative p-2 rounded-xl glass-card animate-float shadow-2xl max-w-md mx-auto">
                <div className="rounded-lg overflow-hidden">
                  {/* Fake browser UI */}
                  <div className="bg-gray-900 px-4 py-2 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <div className="bg-gray-800 rounded-md py-1 px-3 text-xs text-gray-400 flex-grow text-center">
                      shopni.com
                    </div>
                  </div>
                  
                  {/* Mockup content */}
                  <div className="bg-black aspect-video flex items-center justify-center p-4 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20" 
                      style={{
                        backgroundImage: "url('data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E')",
                        backgroundSize: "20px 20px"
                      }}
                    ></div>
                    
                    <div className="grid grid-cols-3 gap-2 w-full relative z-10">
                      <div className="glass-card p-4 h-24 flex flex-col items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-purple-400/20 flex items-center justify-center mb-2">
                          <ShoppingCart size={16} className="text-purp-400le" />
                        </div>
                        <span className="text-xs text-white">Products</span>
                      </div>
                      <div className="glass-card p-4 h-24 flex flex-col items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-blue-400/20 flex items-center justify-center mb-2">
                          <CreditCard size={16} className="text-blue-400" />
                        </div>
                        <span className="text-xs text-white">Checkout</span>
                      </div>
                      <div className="glass-card p-4 h-24 flex flex-col items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-teal-400/20 flex items-center justify-center mb-2">
                          <Package size={16} className="text-teal-400" />
                        </div>
                        <span className="text-xs text-white">Orders</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute -z-10 blur-[100px] rounded-full w-64 h-64 bg-purple-400/20 bottom-0 -right-12"></div>
              <div className="absolute -z-10 blur-[100px] rounded-full w-64 h-64 bg-blue-400/20 top-10 -left-12"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              ShopNi comes packed with all the essential features needed for a modern eCommerce platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck size={24} />,
                title: "Authentication System",
                description: "Secure login & sign-up with JWT authentication, password hashing, and persistent sessions."
              },
              {
                icon: <Package size={24} />,
                title: "Inventory Management",
                description: "Efficient stock tracking system with real-time updates and automated notifications."
              },
              {
                icon: <ShoppingCart size={24} />,
                title: "Cart Management",
                description: "Smooth shopping experience with persistent cart storage and quantity management."
              },
              {
                icon: <CreditCard size={24} />,
                title: "Payment Gateway",
                description: "Seamless checkout process powered by Stripe API with support for various payment methods."
              },
              {
                icon: <Database size={24} />,
                title: "State Management",
                description: "Optimized performance with Redux for global state management and data persistence."
              },
              {
                icon: <Layout size={24} />,
                title: "Responsive Design",
                description: "Beautiful, consistent user interface that works flawlessly across all device sizes."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 h-full"
              >
                <div className="w-12 h-12 rounded-full bg-shopni-purple/20 flex items-center justify-center mb-4">
                  {React.cloneElement(feature.icon, { className: "text-shopni-purple" })}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-20 px-6 relative">
        <div className="absolute -z-10 blur-[150px] rounded-full w-96 h-96 bg-shopni-purple/10 -bottom-20 -right-20"></div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              Built with modern technologies for optimal performance and developer experience
            </p>
          </div>
          
          <div className="glass-card p-12 relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
              {[
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
                { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                { name: "Tailwind CSS", icon: "data:image/png;base64,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SJzfpkPmsEiABEiABEiABASuGlk1eIH7BmAdhJhFOiRAAiRAAiRAAm1KQMqHR4ZXzC4rAIccceLkjrGx7W06XA6LBEiABEiABEigRGA0m9330ZW3PV1wAuQDQFwXJEACJEACJJAOAvbDQAUFoKd/4FIp8Z10DJ2jJAESIAESIIH0EhACl61dNXhFQQFgBsD0LgSOnARIgARIIF0E7IyABQWgu2/gWgBnpAsBR0sCJEACJEACqSTw15GhwTNtBWCNZQlIJQYOmgRIgARIgATSRWDtyNDgnJICsCAPCCNd4+doSYAESIAESCCNBKQ5MrQiIw7rWzQzA/ORNCLgmEmABEiABEggjQTyMA4VDAFM49RzzCRAAiRAAmkmYIUCip7e+RdJYfwqzSA4dhIgARIgARJIEwEhzdeL7t6BD0DgK2kaOMdKAiRAAiRAAqkmIPFBMbtvwRcFxIdTDYKDJwESIAESIIEUEZCQXxKz+wd+LCTenKJxc6gkQAIkQAIkkGoCUuAnort/4GpInJNqEhw8CZAACZAACaSJgMA1oqdv4FYJnJimcXOsJEACJEACJJBmAgK4TXT3DTwA4Ig0g+DYSYAESIAESCBlBFaK2X0D6wVwaMoGzuGSAAmQAAmQQGoJSOARywdgEySmppYCB04CJEACJEACaSMgsNkyATwHYFLaxs7xkgAJkAAJkECKCewQ3X0LdwGyM8UQOHQSIAESIAESSBkBsVt09/ElwJTNOodLAiRAAiSQegLStEwAMvUcCIAESIAESIAEUkaACkDKJpzDJQESIAESIAGLABUArgMSIAESIAESSCEBKgApnHQOmQRIgARIgASoAHANkAAJkAAJkEAKCVABSOGkc8gkQAIkQAIkQAWAa4AESIAESIAEUkiACkAKJ51DJgESIAESIAEqAFwDJEACJEACJJBCAlQAUjjpHDIJkAAJkAAJUAHgGiABEiABEiCBFBKgApDCSeeQSYAESIAESIAKANcACZAACZAACaSQABWAFE46h0wCJEACJEACVAC4BkiABEiABEgghQSoAKRw0jlkEiABEiABEqACwDVAAiRAAiRAAikkQAUghZPOIZMACZAACZAAFQCuARIgARIgARJIIQEqACmcdA6ZBEiABEiABKgAcA2QAAmQAAmQQAoJUAFI4aRzyCRAAiRAAiRABYBrgARIgARIgARS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" }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <div className="h-16 w-16 rounded-full glass flex items-center justify-center mb-3 animate-float" style={{animationDelay: `${index * 0.2}s`}}>
                    <img src={tech.icon} alt={tech.name} className="h-10 w-10" />
                  </div>
                  <p className="text-sm text-gray-300">{tech.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo & Code Section */}
      <section id="demo" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See It In Action</h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              Try out our live demo or explore the source code on GitHub
            </p>
          </div>
          
          <div className="glass-card p-10 text-center">
            <div className="max-w-xl mx-auto flex flex-col items-center">
              <Code size={48} className="text-shopni-purple mb-6" />
              <h3 className="text-2xl font-bold mb-4">Ready to dive in?</h3>
              <p className="text-gray-300 mb-8">
                Experience the full capabilities of ShopNi through our live demo or explore the code to see how it&apos;s built.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a 
                  href="https://shopni-demo.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="button-glow group flex items-center justify-center"
                >
                  Live Demo
                  <ExternalLink className="ml-2" size={18} />
                </a>
                <a 
                  href="https://github.com/shopni/ecommerce" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="button-outline flex items-center justify-center"
                >
                  <GitFork className="mr-2" size={18} />
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 h-[80dvh]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect With Us</h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              Have questions or interested in contributing? Reach out to our team.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              href="https://github.com/shopni"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 flex items-center gap-4 group animate-glow min-w-[200px]"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-shopni-purple/20 transition-colors">
                <GitFork className="text-white group-hover:text-shopni-purple transition-colors" size={20} />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-400">Find us on</div>
                <div className="font-semibold">GitHub</div>
              </div>
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/company/shopni"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 flex items-center gap-4 group animate-glow min-w-[200px]"
              style={{ animationDelay: "1s" }}
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-shopni-blue/20 transition-colors">
                <User className="text-white group-hover:text-shopni-blue transition-colors" size={20} />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-400">Connect on</div>
                <div className="font-semibold">LinkedIn</div>
              </div>
            </motion.a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Page;
