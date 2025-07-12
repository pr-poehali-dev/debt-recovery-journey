import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [debtVisualization] = useState({
    total: 250000,
    investor: 170000,
    bank: 80000,
  });

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 font-['Open_Sans']">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold font-['Montserrat'] text-dark">
              Artem's Story
            </h1>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("story")}
                className="text-gray-600 hover:text-coral transition-colors"
              >
                My Story
              </button>
              <button
                onClick={() => scrollToSection("debt")}
                className="text-gray-600 hover:text-coral transition-colors"
              >
                The Debt
              </button>
              <button
                onClick={() => scrollToSection("help")}
                className="text-gray-600 hover:text-coral transition-colors"
              >
                How to Help
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-coral transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-coral/10 via-white to-teal/10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold font-['Montserrat'] text-dark leading-tight">
                  I can't stay <span className="text-coral">silent</span>{" "}
                  anymore
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700">
                  "$250,000 in Debt: How I Got Trapped and Why I'm Asking for
                  Your Help"
                </h2>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                My name is <strong>Artem</strong>, I'm 29 years old, and for the
                past two years, my life has been an endless cycle of work, debt,
                and despair. Every morning I wake up with one thought:{" "}
                <strong>"How will I pay today?"</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("help")}
                  className="bg-coral hover:bg-coral/90 text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Icon name="Heart" size={20} className="mr-2" />
                  Help Me Now
                </Button>
                <Button
                  onClick={() => scrollToSection("story")}
                  variant="outline"
                  className="border-2 border-dark text-dark hover:bg-dark hover:text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300"
                >
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Read My Story
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/img/ae4799b1-cf1e-4fd5-a8e0-4752a6db8bce.jpg"
                  alt="Artem - A man fighting debt"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent"></div>
              </div>
              <div className="absolute -top-4 -right-4 bg-coral text-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">$250k</div>
                  <div className="text-sm">Total Debt</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Debt Visualization */}
      <section id="debt" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-['Montserrat'] text-dark mb-4">
              The Debt That's Eating Me Alive
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every month is a race for money, humiliating calls from creditors,
              threats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border-2 border-coral/20 shadow-lg">
              <CardHeader className="text-center pb-4">
                <Icon
                  name="TrendingDown"
                  size={48}
                  className="text-coral mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold text-dark">Investor Money</h3>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-coral mb-2">
                  ${debtVisualization.investor.toLocaleString()}
                </div>
                <p className="text-gray-600 mb-4">
                  Contracts with personal guarantees that have now turned into
                  threats
                </p>
                <Progress value={68} className="h-3" />
                <p className="text-sm text-gray-500 mt-2">68% of total debt</p>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-blue/20 shadow-lg">
              <CardHeader className="text-center pb-4">
                <Icon
                  name="Home"
                  size={48}
                  className="text-blue mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold text-dark">Bank Loans</h3>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-blue mb-2">
                  ${debtVisualization.bank.toLocaleString()}
                </div>
                <p className="text-gray-600 mb-4">
                  Secured by my apartment. If I default, I'll end up on the
                  street
                </p>
                <Progress value={32} className="h-3" />
                <p className="text-sm text-gray-500 mt-2">32% of total debt</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-coral/10 to-blue/10 p-8 rounded-2xl">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Icon
                  name="Clock"
                  size={40}
                  className="text-coral mx-auto mb-3"
                />
                <h4 className="text-xl font-semibold text-dark mb-2">
                  24/7 Work
                </h4>
                <p className="text-gray-600">
                  Three jobs at once, but only enough to cover interest
                </p>
              </div>
              <div>
                <Icon
                  name="PhoneCall"
                  size={40}
                  className="text-blue mx-auto mb-3"
                />
                <h4 className="text-xl font-semibold text-dark mb-2">
                  Daily Threats
                </h4>
                <p className="text-gray-600">
                  Humiliating calls from creditors every single day
                </p>
              </div>
              <div>
                <Icon
                  name="TrendingDown"
                  size={40}
                  className="text-dark mx-auto mb-3"
                />
                <h4 className="text-xl font-semibold text-dark mb-2">
                  No Progress
                </h4>
                <p className="text-gray-600">
                  Principal debt isn't shrinking despite all efforts
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold font-['Montserrat'] text-dark text-center mb-12">
              How It All Began
            </h2>

            <div className="space-y-8">
              <Card className="p-8 shadow-lg border-l-4 border-l-teal">
                <div className="flex items-start space-x-4">
                  <Icon name="User" size={32} className="text-teal mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-dark mb-2">
                      My Background
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      I grew up in an ordinary family. My mom is an accountant
                      at a small company, raising me alone after my father left.
                      At <strong>18</strong>, I moved away from my hometown to
                      build my own life.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 shadow-lg border-l-4 border-l-blue">
                <div className="flex items-start space-x-4">
                  <Icon name="Briefcase" size={32} className="text-blue mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-dark mb-2">
                      VSHELL - My Dream
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      By <strong>25</strong>, I had a small but promising
                      business — a natural cosmetics brand called
                      <strong> "VSHELL"</strong>. I invested everything: my
                      savings, loans, money from early investors. In 2021,
                      things were looking up: first contracts, shipments, export
                      plans...
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 shadow-lg border-l-4 border-l-coral">
                <div className="flex items-start space-x-4">
                  <Icon
                    name="AlertTriangle"
                    size={32}
                    className="text-coral mt-1"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-dark mb-2">
                      The Crisis
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      But in <strong>2022</strong>, the world turned upside
                      down.{" "}
                      <strong>
                        The crisis, sanctions, the collapsing exchange rate
                      </strong>{" "}
                      — my business, like thousands of others, was on the brink.
                      To save it, I took out new loans, mortgaged my property,
                      borrowed from private investors with signed agreements.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 shadow-lg border-l-4 border-l-dark">
                <div className="flex items-start space-x-4">
                  <Icon name="Heart" size={32} className="text-dark mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-dark mb-2">
                      The Family I Can't Give a Future To
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      I have a loving wife and a <strong>4-year-old son</strong>
                      . He doesn't understand why Dad is always "on the
                      computer" and never plays with him. My wife tries to stay
                      strong, but I see her crying when she thinks I'm not
                      looking.
                      <br />
                      <br />
                      <strong>
                        The worst part? I can't even buy my son a new winter
                        coat.
                      </strong>{" "}
                      Every penny goes toward the debt.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section
        id="help"
        className="py-16 bg-gradient-to-br from-coral/5 via-white to-teal/5"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-['Montserrat'] text-dark mb-4">
              Why I'm Asking for Help
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I don't want pity. I'm ready to work myself to the bone, but I
              need time and a chance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 shadow-lg">
              <CardHeader>
                <Icon
                  name="Target"
                  size={48}
                  className="text-teal mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold text-dark text-center">
                  My Last Hope - VSHELL
                </h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-teal mr-2" />{" "}
                    Unique formulas (natural skincare patches)
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-teal mr-2" />{" "}
                    Loyal first customers who believe in the product
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-teal mr-2" />{" "}
                    The willingness to work without sleep
                  </li>
                </ul>
                <p className="mt-4 text-gray-600 italic">
                  But the debt is suffocating me. Every dollar I earn goes to
                  creditors.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 shadow-lg">
              <CardHeader>
                <Icon
                  name="HandHeart"
                  size={48}
                  className="text-coral mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold text-dark text-center">
                  How You Can Help
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-coral hover:bg-coral/90 text-white font-semibold py-4 text-lg">
                  <Icon name="DollarSign" size={20} className="mr-2" />
                  Donate via GoFundMe
                </Button>
                <Button className="w-full bg-blue hover:bg-blue/90 text-white font-semibold py-4 text-lg">
                  <Icon name="Bitcoin" size={20} className="mr-2" />
                  Crypto Donation
                </Button>
                <Button className="w-full bg-teal hover:bg-teal/90 text-white font-semibold py-4 text-lg">
                  <Icon name="Share2" size={20} className="mr-2" />
                  Share My Story
                </Button>
                <p className="text-center text-gray-600 text-sm">
                  Even <strong>$10</strong> would give me a breath of air. If
                  not — just share this story.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Icon name="Clock" size={48} className="text-dark mx-auto mb-4" />
            <p className="text-lg text-gray-700 mb-4">
              Right now, it's <strong>Sunday, 11:47 PM</strong>, and I'm writing
              this at the kitchen table while my family sleeps. I don't know
              what tomorrow holds. But I know{" "}
              <strong>I have to keep fighting</strong>.
            </p>
            <p className="text-2xl font-bold text-dark">
              — Artem, exhausted but not yet broken.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-['Montserrat'] mb-8">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Maybe someone who can give me a chance will see this: an investor
            willing to restructure the debt, a partner who believes in my brand,
            or someone who knows a way out of this nightmare.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <Icon name="Mail" size={32} className="text-coral mx-auto" />
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-gray-300">artem.vshell@gmail.com</p>
            </div>
            <div className="space-y-3">
              <Icon
                name="MessageCircle"
                size={32}
                className="text-teal mx-auto"
              />
              <h3 className="text-xl font-semibold">Telegram</h3>
              <p className="text-gray-300">@artem_vshell</p>
            </div>
            <div className="space-y-3">
              <Icon name="Phone" size={32} className="text-blue mx-auto" />
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Artem's Story. Built with hope and determination.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
