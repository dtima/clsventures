
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { CreditCard, Paypal, Landmark, Phone } from "lucide-react";

const formSchema = z.object({
  amount: z.string().min(1, "Amount is required"),
  paymentMethod: z.string(),
  email: z.string().email("Invalid email address"),
});

const DonationForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
      paymentMethod: "",
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast.success("Thank you for your donation!");
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Donation Amount ($)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="100" {...field} />
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="paymentMethod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Payment Method</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="paypal">
                    <div className="flex items-center gap-2">
                      <Paypal className="h-4 w-4" />
                      PayPal
                    </div>
                  </SelectItem>
                  <SelectItem value="orange">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Orange Money
                    </div>
                  </SelectItem>
                  <SelectItem value="mtn">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      MTN MoMo
                    </div>
                  </SelectItem>
                  <SelectItem value="bank">
                    <div className="flex items-center gap-2">
                      <Landmark className="h-4 w-4" />
                      Bank Transfer
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">Process Donation</Button>
      </form>
    </Form>
  );
};

export default DonationForm;
