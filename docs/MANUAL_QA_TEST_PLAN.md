# Gold Nexus - Milestone 3 Manual QA Test Plan

**Environment:** Staging (Vercel + Supabase)  
**Date:** December 21, 2025  
**Version:** Phase A MVP - Milestone 3 Final

---

## 1. Authentication & User Profile

_Goal: Verify user data integrity and editability._

- [x] **Registration**: Create a new account. Verify the "Country" and "Phone" fields save correctly.
- [x] **Login/Logout**: Log in with the new account, then log out. Verify the "My Account" navbar option appears/disappears.
- [x] **Profile Edit Mode**:
  - [x] Navigate to `/profile`. Verify data is "Read Only" (plain text).
  - [x] Click the **Pencil Icon**. Verify fields turn into Inputs.
  - [x] Change Name and Phone. Verify "Save Changes" is disabled if no changes are made.
  - [x] Click **Save Changes**. Verify a "Success" toast appears and the UI reverts to plain text.
  - [x] Refresh the page to ensure data persisted in Supabase.
  - [x] Click **Cancel** during an edit. Verify data reverts to previous state.

## 2. Marketplace & Infinite Scroll

_Goal: Verify high-performance data fetching and unit standardization._

- [x] **Initial Load**: Verify the Marketplace shows the first 50 items.
- [x] **Infinite Scroll**: Scroll to the bottom. Verify the skeleton loaders appear briefly and 50 more items load (if available).
- [x] **Weight Display**: Verify all items show weights in grams (e.g., "31.1 g", "100 g") or "1 kg".
- [x] **Filtering**: Select "Gold Bars". Verify the list resets to Page 1 and only shows bars.
- [x] **Sorting**: Sort by "Price: High to Low". Verify the list resets and the first item is the most expensive.
- [x] **No Results**: Filter by a criteria that has 0 items. Verify the "No Assets Found" state appears.
- [x] **Error Recovery**: Turn on "Airplane Mode" (offline) and scroll to bottom. Verify the "Retry Loading More" button appears and no "infinite toast loop" occurs.

## 3. Live Gold Price & Ticker

_Goal: Verify the critical market data feed._

- [ ] **Ticker Update**: Refresh the page. Does the Gold Ticker at the top load a price (e.g., ~$2600-2700)? It shouldn't be $0 or "Loading..." forever.
- [ ] **Mobile View**: Does the ticker look okay on mobile? (No text overflow).

## 4. Checkout Flow (Pre-Stripe)

_Goal: Verify the order creation logic before payment integration._

- [ ] **Cart to Checkout**: Add an item -> Click Checkout.
- [ ] **Order Creation**: Fill out the form -> Click "Place Order".
- [ ] **Success Page**: Do you land on `/order-confirmation/[id]`? Does it show the correct Order ID?
- [ ] **DB Check**: Go to your Profile -> Orders. Is that new order there?

## 5. Order Management & Tracking

_Goal: Verify the user's post-purchase experience._

- [ ] **Order List**: Navigate to `/profile`. Verify the order history table is populated.
- [ ] **Row Navigation**: Click an entire row in the Order History table. Verify it navigates to `/profile/orders/[id]`.
- [ ] **Order Details**:
  - [ ] Verify the **Progress Tracker** shows the correct status (Placed/Processing/In Transit).
  - [ ] Verify the **Shipping Address** shows the full address (including State if provided).
  - [ ] Verify **Line Items** show product images, SKUs, and correct quantities.
  - [ ] Verify "Each" price only shows if Qty > 1.
  - [ ] Verify the **Total Sum** matches the purchase.

## 6. "Sell Gold" Form (The 'Leads' Fix)

_Goal: Verify the lead generation and data types._

- [ ] **Weight Input**: In the "Sell Your Gold" form, verify the weight input only accepts numbers (since we changed the DB schema to `Decimal`).
- [ ] **Submission**: Submit a form. Does it redirect to a "Thank You" or show a success Toast?
- [ ] **Admin View**: Go to `/admin/leads`. Does the new lead appear at the top?

## 7. Admin Panel & Bulk Import

_Goal: Verify administrative control and data ingestion._

- [ ] **Admin Navigation**: (Mobile) Open Hamburger menu. Verify "Products", "Orders", and "Leads" links exist.
- [ ] **Inventory Table**: Verify horizontal scroll works on mobile. Verify the "Featured" column shows badges.
- [ ] **Product Editing**:
  - [ ] Edit a product. Toggle **Featured Product**. Verify it saves and then appears in the Homepage "Featured" section.
  - [ ] Change a weight. Verify the input is a **Number** field and saves as grams.
- [ ] **Bulk Import**:
  - [ ] Download the CSV template. Open it and verify the sample weights are numbers (e.g., 1000).
  - [ ] Upload a CSV with numeric weights. Verify the "Success" report shows the correct count.
- [ ] **Lead Management**:
  - [ ] Submit a lead via `/sell-gold` with a numeric weight (e.g., 50).
  - [ ] View the lead in `/admin/leads/[id]`. Verify the "Estimated Value" is calculated correctly based on the numeric weight.

## 8. Admin Mobile Access (The Bug Fix)

_Goal: Verify the 'Access Denied' race condition is gone._

- [ ] **Mobile Lockout Check**: Log in as Admin on your phone (or simulated mobile view). **Refresh the page.** Do you stay logged in? (This verifies the "race condition" fix).
- [ ] **Navbar Links**: Open the mobile hamburger menu. Do the "Products", "Orders", "Leads" links actually take you to the right pages?

## 9. Visual Consistency & UI

- [ ] **Custom 404**: Type a random URL (e.g., `/gold-is-cool`). Verify the premium custom 404 page appears.
- [ ] **Navbar Alignment**: Verify "Buy Gold" and "Sell Gold" are perfectly aligned next to the logo on desktop.
- [ ] **Responsive Forms**: Check the Add/Edit product headers on mobile. Verify buttons stack below the title.
- [ ] **Toast Errors**: Trigger a few errors (e.g., invalid SKU). Verify they appear as Toasts, not browser alerts.

## 10. Performance & Loading States

_Goal: Verify the 'Premium' feel._

- [ ] **Slow Network Test**: In Chrome DevTools, set Network to "Fast 3G". Navigate to `/marketplace`. Do you see the Skeletons we added? (Instead of a blank white screen).

### BUGS FOUND

If i idle on admin, then try to perform bulk import, i get 401 Unauthorized... i think this has to do with the bad token sync or something. how to test this fast? maybe lets do refresh token every 30 seconds for testing?
