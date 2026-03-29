"use client";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import React, { useState } from "react";
import { addProducts } from "@/app/action";
import { toast } from "sonner";
import { AuthModel } from "./AuthModel";
const AddProductForm = ({user}: any) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAuthModel, setShowAuthModel] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!user) {
      setShowAuthModel(true);
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("url", url);

    const result = await addProducts(formData);

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message || "Product tracked successfully!");
      setUrl("");
    }

    setLoading(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
        {" "}
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste products URL (Amazon, Walmart, etc.)"
            className="h-12 text-base"
            required
            disabled={loading}
          />

          <Button className="bg-orange-500 hover:bg-orange-600 h-10 sm:h-12 px-8">

            {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Adding...</> : "Track Price"}
          </Button>
        </div>
      </form>

      {/* Auth Model */}
      <AuthModel
        isOpen={showAuthModel}
        onClose={() => setShowAuthModel(false)}
      />
    </>
  );
};

export default AddProductForm;
