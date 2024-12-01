"use client";
import Navbar from "@/components/Navbar";
import { AppShell, AppShellHeader, AppShellMain, Group } from "@mantine/core";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell header={{ height: 100 }} padding="md">
      <AppShellHeader>
        <Group className="h-full w-full px-md">
          <Navbar />
        </Group>
      </AppShellHeader>
      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  );
}
