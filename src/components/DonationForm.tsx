
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { CreditCard, Landmark, Phone, Copy } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  amount: z.string().min(1, "Amount is required"),
  paymentMethod: z.string(),
  email: z.string().email("Invalid email address"),
});

interface MobileMoneyDetails {
  type: "mobile";
  title: string;
  number: string;
  instructions: string;
}

interface BankDetails {
  type: "bank";
  title: string;
  accountName: string;
  accountNumber: string;
  bankName: string;
  swiftCode: string;
  instructions: string;
}

type PaymentDetails = {
  orange: MobileMoneyDetails;
  mtn: MobileMoneyDetails;
  bank: BankDetails;
};

const paymentDetails: PaymentDetails = {
  orange: {
    type: "mobile",
    title: "Orange Money Payment Details",
    number: "+237 678 901 234",
    instructions: "Send payment to this Orange Money number and include your email in the transaction message.",
  },
  mtn: {
    type: "mobile",
    title: "MTN MoMo Payment Details",
    number: "+237 677 889 900",
    instructions: "Transfer the amount to this MTN Mobile Money number and include your email as reference.",
  },
  bank: {
    type: "bank",
    title: "Bank Transfer Details",
    accountName: "CLS Ventures Ltd",
    accountNumber: "0123456789",
    bankName: "EcoBank Cameroon",
    swiftCode: "ECOCCMCX",
    instructions: "Please include your email as payment reference.",
  },
};

const DonationForm = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>("");
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
      paymentMethod: "",
      email: "",
    },
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    if (values.paymentMethod === "paypal") {
      // Redirect to PayPal (in real implementation)
      toast.success("Redirecting to PayPal...");
    } else {
      toast.success("Please complete your payment using the provided details.");
    }
  };

  const renderPaymentDetails = () => {
    if (!selectedMethod || selectedMethod === "paypal") return null;

    const details = paymentDetails[selectedMethod as keyof PaymentDetails];
    
    return (
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>{details.title}</CardTitle>
          <CardDescription>Follow these instructions to complete your payment</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {details.type === "bank" ? (
            <>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Bank Name:</p>
                  <p>{details.bankName}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => copyToClipboard(details.bankName)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Account Name:</p>
                  <p>{details.accountName}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => copyToClipboard(details.accountName)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Account Number:</p>
                  <p>{details.accountNumber}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => copyToClipboard(details.accountNumber)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Swift Code:</p>
                  <p>{details.swiftCode}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => copyToClipboard(details.swiftCode)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </>
          ) : (
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">Payment Number:</p>
                <p>{details.number}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => copyToClipboard(details.number)}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          )}
          <p className="text-sm text-muted-foreground mt-4">{details.instructions}</p>
        </CardContent>
      </Card>
    );
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
              <Select 
                onValueChange={(value) => {
                  field.onChange(value);
                  setSelectedMethod(value);
                }} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="paypal">
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
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

        {renderPaymentDetails()}

        <Button type="submit" className="w-full">
          {selectedMethod === "paypal" ? "Proceed to PayPal" : "Generate Payment Details"}
        </Button>
      </form>
    </Form>
  );
};

export default DonationForm;
