import { createBrowserRouter } from "react-router";
import { Home } from "./components/Home";
import { ServiceRequestPage } from "./components/ServiceRequestPage";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      {
        path: "iso-9001-request",
        element: <ServiceRequestPage
          serviceName="ISO 9001:2015"
          serviceDescription="Quality Management System Certification"
        />
      },
      {
        path: "iso-14001-request",
        element: <ServiceRequestPage
          serviceName="ISO 14001:2015"
          serviceDescription="Environmental Management System Certification"
        />
      },
      {
        path: "iso-45001-request",
        element: <ServiceRequestPage
          serviceName="ISO 45001:2018"
          serviceDescription="Occupational Health & Safety Management System"
        />
      },
      {
        path: "iso-22000-request",
        element: <ServiceRequestPage
          serviceName="ISO 22000:2018"
          serviceDescription="Food Safety Management System Certification"
        />
      },
      {
        path: "haccp-request",
        element: <ServiceRequestPage
          serviceName="HACCP"
          serviceDescription="Hazard Analysis and Critical Control Points Certification"
        />
      },
      {
        path: "gmp-request",
        element: <ServiceRequestPage
          serviceName="GMP"
          serviceDescription="Good Manufacturing Practice Certification"
        />
      },
      {
        path: "business-planning-request",
        element: <ServiceRequestPage
          serviceName="Business Planning"
          serviceDescription="Professional Business Strategy & Planning Services"
        />
      },
      {
        path: "company-profile-request",
        element: <ServiceRequestPage
          serviceName="Company Profile"
          serviceDescription="Professional Company Profile Design & Development"
        />
      },
      {
        path: "web-design-request",
        element: <ServiceRequestPage
          serviceName="Web Design"
          serviceDescription="Custom Website Design & Development"
        />
      },
      {
        path: "domain-hosting-request",
        element: <ServiceRequestPage
          serviceName="Domain & Hosting"
          serviceDescription="Domain Registration & Web Hosting Services"
        />
      },
      {
        path: "branding-request",
        element: <ServiceRequestPage
          serviceName="Branding"
          serviceDescription="Professional Brand Identity & Design Services"
        />
      },
    ],
  },
]);
