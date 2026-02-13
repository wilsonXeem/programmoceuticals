import mongoose from "mongoose";

const paymentTransactionSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    provider: { type: String, default: "paystack" },
    reference: { type: String, required: true, unique: true, index: true },
    packageId: { type: String, required: true },
    packageName: { type: String, required: true },
    credits: { type: Number, required: true },
    amountNaira: { type: Number, required: true },
    amountKobo: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "success", "failed", "abandoned"],
      default: "pending"
    },
    providerStatus: { type: String, default: "initialized" },
    authorizationUrl: { type: String, default: null },
    failureReason: { type: String, default: null },
    gatewayResponse: { type: mongoose.Schema.Types.Mixed, default: null },
    paidAt: { type: Date, default: null },
    verifiedAt: { type: Date, default: null },
    creditedAt: { type: Date, default: null }
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const PaymentTransaction = mongoose.model("PaymentTransaction", paymentTransactionSchema);

export default PaymentTransaction;
