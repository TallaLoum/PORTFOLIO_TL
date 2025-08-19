# Configuration du Formulaire de Contact avec EmailJS

## Étapes pour recevoir les messages de contact

### 1. Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Confirmez votre email

### 2. Configurer votre service email
1. Dans le dashboard EmailJS, allez dans "Email Services"
2. Cliquez sur "Add New Service"
3. Choisissez votre fournisseur email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre compte email
5. Notez votre **Service ID**

### 3. Créer un template d'email
1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. Utilisez ce template :

```
Nouveau message de contact depuis votre portfolio

De: {{from_name}} ({{from_email}})
Sujet: {{subject}}

Message:
{{message}}

---
Envoyé depuis votre portfolio
```

4. Notez votre **Template ID**

### 4. Obtenir votre clé publique
1. Allez dans "Account" > "General"
2. Copiez votre **Public Key**

### 5. Mettre à jour le code
Dans le fichier `src/pages/Contact.tsx`, remplacez :
```javascript
const serviceId = 'YOUR_SERVICE_ID';      // Remplacez par votre Service ID
const templateId = 'YOUR_TEMPLATE_ID';    // Remplacez par votre Template ID  
const publicKey = 'YOUR_PUBLIC_KEY';      // Remplacez par votre Public Key
```

### 6. Tester le formulaire
1. Remplissez le formulaire sur votre site
2. Vérifiez votre boîte email
3. Les messages devraient arriver dans votre inbox

## Alternatives gratuites

### Option 1: Formspree
- Allez sur [https://formspree.io/](https://formspree.io/)
- Créez un compte gratuit (50 soumissions/mois)
- Créez un nouveau formulaire
- Remplacez l'action du formulaire par l'URL Formspree

### Option 2: Netlify Forms (si vous déployez sur Netlify)
- Ajoutez `netlify` et `data-netlify="true"` à votre balise `<form>`
- Les messages apparaîtront dans votre dashboard Netlify

### Option 3: GetForm
- Allez sur [https://getform.io/](https://getform.io/)
- Créez un compte gratuit
- Obtenez votre endpoint URL
- Configurez le formulaire pour envoyer vers cette URL

## Recommandation
EmailJS est recommandé car :
- ✅ Gratuit jusqu'à 200 emails/mois
- ✅ Facile à configurer
- ✅ Fonctionne côté client (pas besoin de serveur)
- ✅ Messages reçus directement dans votre email