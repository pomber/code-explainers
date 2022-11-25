export async function getDiscordMembers() {
  const res = await fetch(
    "https://discord.com/api/v9/invites/DnpTjcRTgG?with_counts=true",
    { next: { revalidate: 60 * 30 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Discord data");
  }

  const { approximate_member_count } = await res.json();
  return approximate_member_count;
}

export async function getNewsletterSubscribers() {
  return 101;
}
