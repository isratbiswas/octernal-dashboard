import type {
  AnalyticsApi,
  DashboardApiResponse,
  DashboardUserApi,
  OverviewApiResponse,
  ProductApi,
} from "../types";
import base_api from "./axios";

export interface DashboardApiData {
  overviewContact: OverviewApiResponse;
  users: DashboardUserApi[];
  analytics: AnalyticsApi[];
  products: ProductApi[];
}

export async function fetchDashboardData(): Promise<DashboardApiData> {
  try {
    const [overviewContact, users, analytics, products] = await Promise.all([
      base_api.get<OverviewApiResponse>("/api/overview"),
      base_api.get<DashboardUserApi[]>("/api/users"),
      base_api.get<AnalyticsApi[]>("/api/analytics"),
      base_api.get<ProductApi[]>("/api/products"),
    ]);

    return {
      overviewContact: overviewContact.data,
      users: users.data,
      analytics: analytics.data,
      products: products.data,
    };
  } catch {
    const { data } = await base_api.get<DashboardApiResponse>("/api/dashboard");

    return {
      overviewContact: {
        name: "Dashboard Overview",
        email: "dashboard@example.com",
        phone: "N/A",
        message: "Data loaded from dashboard endpoint",
      },
      users: data.users,
      analytics: data.analytics,
      products: data.products,
    };
  }
}
