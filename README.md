# Global Header & Footer

This project was originally forked from https://github.com/SharePoint/sp-dev-solutions/tree/master/solutions/global-footer 

A Global Header and Footer using SPFX Extension for SharePoint Online.

Steps to install:

1# Install the package file /SharePoint/solution/spfx-global-footer.sppkg to SharePoint App cataloge.

2# Add app to site 

3# add JSON with links to TenantWideExtension list(/Lists/TenantWideExtensions/AllItems.aspx)  - Example JSON below

List item for TenantWideExtension should look like:  
Title: GlobalFooter  
Component Id: 89092bd4-9033-4ea1-8d10-776b7116f8e0  
Component Properties: (see JSON below)  
Web Template: <blank>  
List Template: 0  
Location: ClientSideExtension.ApplicationCustomizer	  
Sequence: <blank>  
Host Properties: <blank>   
  
  
Footer and header should now be visible on every modern experience page.

```
{
    "footer": {
        "links": [
            {
                "icon": "RemoveLink",
                "title": "?Broken Link",
                "url": "mailto:no@no.com"
            },
            {
                "icon": "feedback",
                "title": "Send Feedback",
                "url": "mailto:no@no.com"
            },
            {
                "icon": "Megaphone",
                "title": "Ask Question",
                "url": "https:/www.google.com.au"
            }
        ],
        "label": " "
    },
    "header": {
        "links": [
            {
                "icon": "RemoveLink",
                "title": "Broken Link",
                "url": "mailto:no@no.com"
            },
            {
                "icon": "feedback",
                "title": "Send Feedback Heaqder",
                "url": "mailto:no@no.com"
            }
        ],
        "label": " "
    }
}
```

