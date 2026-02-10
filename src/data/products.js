export const products = [
  // --- GENERATORS ---
  {
    id: 1,
    name: "EcoFlow Industrial Generator X500",
    category: "Generators",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    description: "High-efficiency industrial generator designed for continuous heavy-duty operation with minimal emissions.",
    specs: {
      "Power Output": "500 kW",
      "Fuel Type": "Hybrid (Solar/Diesel)",
      "Runtime": "12 Hours @ 50% Load",
      "Warranty": "5 Years"
    }
  },
  {
    id: 2,
    name: "Titan Mobile Diesel Unit",
    category: "Generators",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800", 
    description: "Towable diesel generator for remote sites and events. Weather-resistant casing and simplified control panel.",
    specs: {
      "Power Output": "150 kVA",
      "Tank Capacity": "200 Liters",
      "Frequency": "50/60 Hz Switchable",
      "Certification": "Tier 4 Final"
    }
  },
  {
    id: 3,
    name: "Compact Inverter Gen 2000",
    category: "Generators",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800", 
    description: "Lightweight, portable inverter generator for sensitive electronics. Ideal for field work and small tools.",
    specs: {
      "Power Output": "2000 W",
      "Weight": "45 lbs",
      "Outlets": "2x 120V AC, 2x USB",
      "Start Type": "Recoil"
    }
  },

  // --- SOLAR PANELS ---
  {
    id: 4,
    name: "SolarMax Panel Array Pro",
    category: "Solar",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800",
    description: "Tier-1 monocrystalline solar panels with 22.5% efficiency rating, engineered for large-scale commercial installations.",
    specs: {
      "Efficiency": "22.5%",
      "Wattage": "450W",
      "Dimensions": "1.8m x 1m",
      "Warranty": "25 Years Output"
    }
  },
  {
    id: 5,
    name: "FlexiSolar Thin Film",
    category: "Solar",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop", 
    description: "Flexible, lightweight solar sheets for curved surfaces, RVs, and marine applications where rigid panels won't fit.",
    specs: {
      "Flexibility": "Up to 30 degrees",
      "Weight": "4.2 lbs",
      "Wattage": "100W",
      "Mounting": "Adhesive / Grommet"
    }
  },
  {
    id: 6,
    name: "Residential Black Series",
    category: "Solar",
    image: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&q=80&w=800", 
    description: "All-black aesthetic panels designed for modern homes. Blends seamlessly with dark roofing materials.",
    specs: {
      "Efficiency": "21.7%",
      "Wattage": "400W",
      "Cell Type": "Half-cut Mono",
      "Frame": "Anodized Black Aluminum"
    }
  },
  {
    id: 7,
    name: "Bifacial Utility Panel",
    category: "Solar",
    image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?q=80&w=800&auto=format&fit=crop", 
    description: "Dual-sided active surface captures sunlight from both the front and reflected light from the back, increasing yield by up to 30%.",
    specs: {
      "Front Efficiency": "22%",
      "Back Gain": "Up to 25%",
      "Wattage": "550W+",
      "Glass": "Dual Tempered"
    }
  },

  // --- STORAGE & BATTERIES ---
  {
    id: 8,
    name: "Lithium Pro Stack 10k",
    category: "Storage",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800", 
    description: "Scalable LiFePO4 energy storage solution. Stack up to 10 units for massive commercial energy reserves.",
    specs: {
      "Capacity": "10 kWh per unit",
      "Voltage": "48V",
      "Cycle Life": "6000+ Cycles",
      "Chemistry": "Lithium Iron Phosphate"
    }
  },
  {
    id: 9,
    name: "PowerWall Home Battery",
    category: "Storage",
    image: "https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?auto=format&fit=crop&q=80&w=800", 
    description: "Sleek wall-mounted battery for residential use. Stores solar energy for night use or backup during outages.",
    specs: {
      "Capacity": "13.5 kWh",
      "Peak Power": "7 kW",
      "Installation": "Floor or Wall Mount",
      "Warranty": "10 Years"
    }
  },
  {
    id: 10,
    name: "GridScale Container Storage",
    category: "Storage",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800", 
    description: "Containerized energy storage system for utility-scale projects and microgrids.",
    specs: {
      "Capacity": "2 MWh",
      "Output": "1 MW",
      "Cooling": "Liquid Cooled",
      "Safety": "Fire Suppression Integrated"
    }
  },

  // --- INVERTERS & ACCESSORIES ---
  {
    id: 11,
    name: "Hybrid Inverter H-5000",
    category: "Inverters",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800", 
    description: "Intelligent hybrid inverter that manages power between solar panels, batteries, and the grid automatically.",
    specs: {
      "Max PV Input": "6500W",
      "AC Output": "5000W",
      "Efficiency": "97.6%",
      "Monitoring": "WiFi / App Included"
    }
  },
  {
    id: 13,
    name: "Industrial 3-Phase Inverter",
    category: "Inverters",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=800&auto=format&fit=crop", 
    description: "Heavy-duty 3-phase inverter for factories and large commercial complexes.",
    specs: {
      "Power": "100 kW",
      "Max Efficiency": "98.8%",
      "Protection": "Surge / Overload",
      "Comms": "RS485 / Ethernet"
    }
  },
  {
    id: 14,
    name: "EV Charging Station L2",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800&auto=format&fit=crop", 
    description: "Level 2 commercial electric vehicle charger, compatible with all major EV brands.",
    specs: {
      "Charging Rate": "7.2 kW - 22 kW",
      "Connector": "J1772 / Type 2",
      "Auth": "RFID / App",
      "Mount": "Pedestal or Wall"
    }
  }
];