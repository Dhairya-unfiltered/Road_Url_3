import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link2, Clock, RefreshCw, Zap, Shield, TrendingUp } from "lucide-react";


export default function Landing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center relative overflow-hidden bg-gradient-to-b from-background to-secondary/30 py-20 md:py-32">
        
        <div className="absolute inset-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
               <span className=" bg-gradient-to-r from-[#9a6df0] to-[#377dff] bg-clip-text text-transparent">
                 Procrastinator's
              </span> {" "}Bestfriend
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Generate a placeholder link to submit before the deadline — update it with the real link later, without ever changing the submitted link.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center pt-4">
              <Button asChild size="lg" className="text-lg h-12 px-8 bg-gradient-to-r from-[#9a6df0] to-[#377dff]">
                <Link to="/auth">Get Started <Zap className="h-6 w-6 text-primary0" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">Three simple steps to beat any deadline</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#9a6df0] to-[#377dff] mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold mb-3">Create</h3>
              <p className="text-muted-foreground">
                Login and click on 'Create' to generate a unique placeholder URL in seconds. No real link needed yet.
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#9a6df0] to-[#377dff] mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold mb-3">Copy</h3>
              <p className="text-muted-foreground">
                Copy the generated dummy URL and submit it. The link stays the same forever.
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#9a6df0] to-[#377dff] mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold mb-3">Edit</h3>
              <p className="text-muted-foreground">
                Add your actual project URL later. Visitors get redirected automatically.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why DummyLink?</h2>
            <p className="text-xl text-muted-foreground">Everything you need to manage deadline stress</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary stroke-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Instant Placeholder URLs</h3>
              <p className="text-muted-foreground">
                Generate dummy links in seconds. Just login and click on create.
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <RefreshCw className="h-6 w-6 text-primary stroke-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Edit Anytime</h3>
              <p className="text-muted-foreground">
                Update your target URL as many times as needed. Same link, new destination.
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary stroke-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Perfect for Deadlines</h3>
              <p className="text-muted-foreground">
                Submit on time, finish at your own pace. No more last-minute panic.
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Link2 className="h-6 w-6 text-primary stroke-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Permanent Links</h3>
              <p className="text-muted-foreground">
                Your dummy URL never changes, even when you update the destination.
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary stroke-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Short Url</h3>
              <p className="text-muted-foreground">
                DummyLink can also be used as a short url.
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary stroke-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
              <p className="text-muted-foreground">
                Only you can edit your links. Your data is safe and encrypted.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#9a6df0] to-[#377dff] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to beat your next deadline?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join students and professionals who never miss a submission deadline.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg h-12 px-8">
            <Link to="/auth">Get Started Free</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t bg-background">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© DummyLink 2025. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
