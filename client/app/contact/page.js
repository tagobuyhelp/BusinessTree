import { ContactPage as ContactPageView } from "../../components/Contact/ContactPage";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "Get a Free Strategy Call",
  description:
    "Talk to Business Tree about SEO services, web development, and performance marketing. Get a free strategy call with quick wins and next steps.",
  pathname: "/contact",
  keywords: ["Digital Marketing Agency", "SEO Services", "Web Development", "Performance Marketing", "Global Growth"]
});

export default function ContactPage() {
  return (
    <ContactPageView />
  );
}
