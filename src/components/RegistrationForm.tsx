import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const RegistrationForm = () => {
  const [fullName, setFullName] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName.trim() || !whatsappNumber.trim()) {
      toast.error("لطفاً تمام فیلدها را پر کنید");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('registrations')
        .insert([
          {
            full_name: fullName.trim(),
            whatsapp_number: whatsappNumber.trim(),
          }
        ]);

      if (error) throw error;

      setIsSuccess(true);
      setFullName("");
      setWhatsappNumber("");
      toast.success("اطلاعات شما با موفقیت ثبت شد");
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("خطا در ثبت اطلاعات. لطفاً دوباره تلاش کنید");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="registration" className="py-12 sm:py-16 md:py-20 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
              خرید دوره کامل و اصلی با ۶۰٪ تخفیف
            </h2>
            <p className="text-muted-foreground text-lg">
              برای ثبت‌نام در دوره، اطلاعات خود را وارد کنید
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-border/50 shadow-lg animate-fade-in">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-base font-medium">
                نام و نام خانوادگی
              </Label>
              <Input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="نام کامل خود را وارد کنید"
                className="h-12 text-base bg-secondary/50 border-border/50 focus:border-primary transition-colors"
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="text-base font-medium">
                شماره واتساپ
              </Label>
              <Input
                id="whatsapp"
                type="tel"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                placeholder="شماره واتساپ خود را وارد کنید"
                className="h-12 text-base bg-secondary/50 border-border/50 focus:border-primary transition-colors"
                dir="ltr"
                disabled={isSubmitting}
              />
            </div>

            <Button 
              type="submit"
              className="w-full h-12 text-base font-semibold glow-button bg-primary hover:bg-primary/90"
              disabled={isSubmitting}
            >
              <span className="relative z-10">
                {isSubmitting ? "در حال ارسال..." : "ارسال"}
              </span>
            </Button>

            {isSuccess && (
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/30 animate-fade-in">
                <p className="text-center text-base leading-relaxed">
                  اطلاعات شما ثبت شد. در صورت داشتن ظرفیت خالی برای ثبت‌نام با شما تماس گرفته خواهد شد.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;