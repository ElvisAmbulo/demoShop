import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { products, formatPrice } from '@/data/products';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { DollarSign, ShoppingCart, Users, TrendingUp, Package, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const revenueData = [
  { month: 'Jan', revenue: 1240000, orders: 340 },
  { month: 'Feb', revenue: 1580000, orders: 410 },
  { month: 'Mar', revenue: 1890000, orders: 485 },
  { month: 'Apr', revenue: 2100000, orders: 520 },
  { month: 'May', revenue: 2450000, orders: 610 },
  { month: 'Jun', revenue: 2890000, orders: 720 },
];

const categoryData = [
  { name: "Men's Wear", value: 28 },
  { name: "Women's Wear", value: 32 },
  { name: 'Streetwear', value: 15 },
  { name: 'Shoes', value: 12 },
  { name: 'Accessories', value: 8 },
  { name: 'Other', value: 5 },
];

const COLORS = ['hsl(16, 65%, 45%)', 'hsl(42, 80%, 55%)', 'hsl(152, 60%, 40%)', 'hsl(20, 10%, 40%)', 'hsl(30, 15%, 70%)', 'hsl(210, 10%, 60%)'];

const stats = [
  { title: 'Total Revenue', value: 'KES 12.15M', change: '+23%', icon: DollarSign },
  { title: 'Orders', value: '3,085', change: '+18%', icon: ShoppingCart },
  { title: 'Customers', value: '2,410', change: '+31%', icon: Users },
  { title: 'Conversion Rate', value: '4.2%', change: '+0.5%', icon: TrendingUp },
];

const recentOrders = [
  { id: '#SH-7892', customer: 'Wambui N.', total: 7499, status: 'Delivered', date: '28 Feb' },
  { id: '#SH-7891', customer: 'Ochieng K.', total: 4998, status: 'Shipped', date: '28 Feb' },
  { id: '#SH-7890', customer: 'Amina H.', total: 12499, status: 'Processing', date: '27 Feb' },
  { id: '#SH-7889', customer: 'Mwangi J.', total: 3499, status: 'Delivered', date: '27 Feb' },
  { id: '#SH-7888', customer: 'Njeri W.', total: 8998, status: 'Shipped', date: '26 Feb' },
];

const statusColors: Record<string, string> = {
  Delivered: 'bg-success/10 text-success',
  Shipped: 'bg-accent/20 text-accent-foreground',
  Processing: 'bg-primary/10 text-primary',
};

export default function Admin() {
  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground text-sm mt-1">Welcome back — here's your store overview</p>
        </div>
        <Link to="/" className="text-sm text-primary hover:underline">← Back to Store</Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map(s => (
          <Card key={s.title}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-muted-foreground">{s.title}</p>
                  <p className="text-2xl font-bold mt-1">{s.value}</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="flex items-center gap-1 mt-2 text-success text-sm font-medium">
                <ArrowUpRight className="w-3 h-3" /> {s.change} from last month
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {/* Revenue Chart */}
        <Card className="lg:col-span-2">
          <CardHeader><CardTitle className="font-heading text-lg">Revenue Trend</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={v => `${(v/1000000).toFixed(1)}M`} />
                <Tooltip formatter={(v: number) => formatPrice(v)} />
                <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Category Breakdown */}
        <Card>
          <CardHeader><CardTitle className="font-heading text-lg">Sales by Category</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={categoryData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={3} dataKey="value">
                  {categoryData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader><CardTitle className="font-heading text-lg">Recent Orders</CardTitle></CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-muted-foreground">
                  <th className="text-left py-3 font-medium">Order</th>
                  <th className="text-left py-3 font-medium">Customer</th>
                  <th className="text-left py-3 font-medium">Total</th>
                  <th className="text-left py-3 font-medium">Status</th>
                  <th className="text-left py-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map(o => (
                  <tr key={o.id} className="border-b last:border-0">
                    <td className="py-3 font-medium">{o.id}</td>
                    <td className="py-3">{o.customer}</td>
                    <td className="py-3 font-semibold">{formatPrice(o.total)}</td>
                    <td className="py-3">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColors[o.status]}`}>{o.status}</span>
                    </td>
                    <td className="py-3 text-muted-foreground">{o.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Inventory Quick View */}
      <Card className="mt-6">
        <CardHeader><CardTitle className="font-heading text-lg">Low Stock Alerts</CardTitle></CardHeader>
        <CardContent>
          <div className="space-y-3">
            {products.filter(p => p.stockCount && p.stockCount <= 15).map(p => (
              <div key={p.id} className="flex items-center justify-between p-3 rounded-lg bg-destructive/5 border border-destructive/10">
                <div className="flex items-center gap-3">
                  <Package className="w-4 h-4 text-destructive" />
                  <span className="font-medium text-sm">{p.name}</span>
                </div>
                <span className="text-sm font-semibold text-destructive">{p.stockCount} left</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
