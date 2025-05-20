import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
  const shorturl = params.url;
  const client = await clientPromise;
  const db = client.db("bitlinks");
  const collection = db.collection("url");
  const doc = await collection.findOne({ shorturl });

  if (doc) {
    redirect(doc.url);
    return null; // Prevent rendering after redirect
  } else {
    redirect(`${process.env.NEXT_PUBLIC_HOST}`);
    return null; // Prevent rendering after redirect
  }
}