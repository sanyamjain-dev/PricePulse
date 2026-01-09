"use client";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import React, { useState } from "react";

const AddProductFrom = (user: any) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSubmit = () => {

  }
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
    </>
  );
};

export default AddProductFrom;
