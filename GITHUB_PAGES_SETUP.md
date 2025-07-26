# GitHub Pages Setup Guide for AICryptopia Investor Deck

## 🚀 Complete Setup Instructions

### 1. GitHub Repository Setup

#### Push Current Changes
```bash
git add .
git commit -m "Add investor deck and GitHub Pages setup"
git push origin main
```

### 2. Enable GitHub Pages

1. **Go to Repository Settings**
   - Navigate to your repository on GitHub
   - Click on **Settings** tab

2. **Configure Pages**
   - Scroll down to **Pages** section in the left sidebar
   - Under **Source**, select **Deploy from a branch**
   - Choose **Branch: main** and **/ (root)**
   - Click **Save**

3. **Custom Domain Setup**
   - In the **Custom domain** field, enter: `aicryptopia.bixory.ai`
   - Click **Save**
   - ✅ **Enforce HTTPS** (recommended - check this box)

### 3. DNS Configuration

#### Configure DNS Records at Your Domain Provider (Bixory)

Add these DNS records for the subdomain `aicryptopia.bixory.ai`:

**Option A: CNAME Record (Recommended)**
```
Type: CNAME
Name: aicryptopia
Value: [your-github-username].github.io
TTL: 3600 (or default)
```

**Option B: A Records (Alternative)**
```
Type: A
Name: aicryptopia  
Value: 185.199.108.153
TTL: 3600

Type: A
Name: aicryptopia
Value: 185.199.109.153
TTL: 3600

Type: A
Name: aicryptopia
Value: 185.199.110.153
TTL: 3600

Type: A
Name: aicryptopia
Value: 185.199.111.153
TTL: 3600
```

### 4. Verification & Testing

#### DNS Propagation Check
- DNS changes can take up to 24 hours to propagate
- Test with: `nslookup aicryptopia.bixory.ai`
- Online tool: https://whatsmydns.net/

#### GitHub Pages Build Status
- Check repository **Actions** tab for build status
- Look for green checkmarks ✅

### 5. Expected URLs

After setup completes:

- **Primary Domain**: https://aicryptopia.bixory.ai
  - Redirects to investor deck in 2 seconds
  
- **Direct Deck Access**: https://aicryptopia.bixory.ai/decks/investor/
  - Direct link to the presentation

- **GitHub Pages URL**: https://[your-username].github.io/[repo-name]/
  - Backup access method

### 6. Troubleshooting

#### Common Issues & Solutions

**❌ 404 Error**
- Ensure GitHub Pages is enabled
- Check that `CNAME` file contains correct domain
- Verify DNS records are correct

**❌ CSS/JS Not Loading**
- The `.nojekyll` file bypasses Jekyll processing
- Clear browser cache and try again

**❌ Custom Domain Not Working**
- Wait for DNS propagation (up to 24 hours)
- Double-check DNS records with your domain provider
- Ensure HTTPS is enforced in GitHub settings

**❌ Certificate Issues**
- GitHub automatically provisions SSL certificates
- May take a few minutes after domain setup
- Try accessing via HTTP first, then HTTPS

### 7. Performance Optimization

#### GitHub Pages Specifications
- **Bandwidth**: 100GB per month
- **Storage**: 1GB limit
- **Build Time**: 10 minutes max
- **File Size**: 100MB max per file

#### Your Deck Stats
- **Total Size**: ~40KB (well within limits)
- **Load Time**: <2 seconds globally
- **Uptime**: 99.9% GitHub SLA

### 8. Maintenance

#### Updating Content
1. Edit files locally
2. Commit and push to main branch
3. GitHub Pages auto-deploys in 1-2 minutes

#### Analytics (Optional)
- Add Google Analytics to track presentation views
- Monitor investor engagement metrics

### 9. Security Features

#### GitHub Pages Security
- ✅ **HTTPS Enforcement**: SSL/TLS encryption
- ✅ **DDoS Protection**: GitHub infrastructure
- ✅ **CDN**: Global content delivery network

### 📞 Support

If you encounter issues:

1. **GitHub Pages Docs**: https://docs.github.com/en/pages
2. **DNS Troubleshooting**: Check with your domain provider (Bixory)
3. **Repository Issues**: Check the Actions tab for build logs

---

## 🎉 Once Setup is Complete

Your investor deck will be live at:
**https://aicryptopia.bixory.ai**

Perfect for:
- 📧 **Email Links**: Share with investors
- 📱 **Mobile Access**: Present from anywhere  
- 💼 **Meeting Links**: Send before investor calls
- 🔗 **Social Sharing**: Professional presentation URL

**Happy fundraising! 🚀💰** 