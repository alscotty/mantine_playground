export type Ad = {
    marketer: string,
    content: string,
    date: Date,
    impressions: number,
    lastUpdated: Date
}

export const AdsData: Ad[] = [
    {
        marketer: "TechCorp Solutions",
        content: "Upgrade your business with our cloud services",
        date: new Date("2024-03-15"),
        impressions: 15000,
        lastUpdated: new Date("2024-03-20")
    },
    {
        marketer: "EcoLife Products",
        content: "Sustainable living starts with our eco-friendly products",
        date: new Date("2024-03-14"),
        impressions: 8500,
        lastUpdated: new Date("2024-03-19")
    },
    {
        marketer: "FitnessFirst",
        content: "Transform your life with our premium fitness equipment",
        date: new Date("2024-03-13"),
        impressions: 22000,
        lastUpdated: new Date("2024-03-18")
    },
    {
        marketer: "GourmetKitchen",
        content: "Professional cooking tools for home chefs",
        date: new Date("2024-03-12"),
        impressions: 12000,
        lastUpdated: new Date("2024-03-17")
    },
    {
        marketer: "SmartHome Tech",
        content: "Automate your home with our smart devices",
        date: new Date("2024-03-11"),
        impressions: 18000,
        lastUpdated: new Date("2024-03-16")
    },
    {
        marketer: "TravelWise",
        content: "Discover amazing destinations with our travel packages",
        date: new Date("2024-03-10"),
        impressions: 25000,
        lastUpdated: new Date("2024-03-15")
    },
    {
        marketer: "BeautyEssentials",
        content: "Premium skincare products for radiant skin",
        date: new Date("2024-03-09"),
        impressions: 16000,
        lastUpdated: new Date("2024-03-14")
    },
    {
        marketer: "EduTech Solutions",
        content: "Revolutionary learning platforms for students",
        date: new Date("2024-03-08"),
        impressions: 14000,
        lastUpdated: new Date("2024-03-13")
    },
    {
        marketer: "GreenEnergy Co",
        content: "Switch to renewable energy solutions",
        date: new Date("2024-03-07"),
        impressions: 9500,
        lastUpdated: new Date("2024-03-12")
    },
    {
        marketer: "PetCare Plus",
        content: "Premium pet supplies and veterinary services",
        date: new Date("2024-03-06"),
        impressions: 11000,
        lastUpdated: new Date("2024-03-11")
    }
]