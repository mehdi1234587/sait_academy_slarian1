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
    <section id="registration" className="relative py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 neon-text">
              دریافت دوره کامل با تخفیف ۶۰٪
            </h2>
            <p className="text-foreground/80 text-lg sm:text-xl">
              برای ثبت‌نام در دوره، اطلاعات خود را وارد کنید
            </p>
          </div>

          <form onSubmit={handleSubmit} className="neon-glass rounded-3xl p-6 sm:p-8 md:p-10 space-y-6 animate-fade-in">
            <div className="space-y-3">
              <Label htmlFor="fullName" className="text-lg font-medium text-neon-cyan">
                نام کامل
              </Label>
              <Input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="نام و نام خانوادگی خود را وارد کنید"
                className="h-14 text-base bg-background/50 border-neon-cyan/30 focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/50 transition-all rounded-xl"
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="whatsapp" className="text-lg font-medium text-neon-purple">
                شماره واتساپ
              </Label>
              <Input
                id="whatsapp"
                type="tel"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                placeholder="شماره واتساپ خود را وارد کنید"
                className="h-14 text-base bg-background/50 border-neon-purple/30 focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/50 transition-all rounded-xl"
                dir="ltr"
                disabled={isSubmitting}
              />
            </div>

            <Button 
              type="submit"
              className="w-full h-14 text-lg font-bold neon-button rounded-xl mt-8"
              disabled={isSubmitting}
            >
              {isSubmitting ? "در حال ارسال..." : "ارسال اطلاعات"}
            </Button>

            {isSuccess && (
              <div className="neon-glass p-6 rounded-2xl border-neon-cyan/50 animate-fade-in">
                <p className="text-center text-base sm:text-lg leading-relaxed">
                  اطلاعات شما با موفقیت ثبت شد. در صورت وجود ظرفیت، با شما تماس خواهیم گرفت.
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