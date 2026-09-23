export interface CheckoutFormState {
  fullName: string;
  email: string;
  phone: string;
  targetExam: 'Group 1' | 'Group 2/2A' | 'Group 4' | 'All Groups';
  paymentMethod: 'upi' | 'card' | 'netbanking';
  upiApp?: 'gpay' | 'phonepe' | 'paytm' | 'other';
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PrepStep {
  step: string;
  name: string;
  description: string;
  actionDetail: string;
  keyDeliverable: string;
}
