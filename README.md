# Sariq Bola Pizza University

Xodimlar uchun ichki o'quv platformasi: login, role-based kurslar, darslar, testlar uchun boshlang'ich loyiha.

## Ishga tushirish

```bash
npm install
npm run dev
```

## Firebase sozlash

1. Firebase Console'da yangi project oching.
2. Authentication -> Sign-in method -> Email/Password ni yoqing.
3. Firestore Database yarating.
4. Project settings -> Web app config ma'lumotlarini `src/firebase.js` ichiga qo'ying.
5. Firestore Rules qismiga `firestore.rules` ichidagi kodni qo'ying.

## Birinchi admin yaratish

Firebase Authentication ichida qo'lda birinchi admin email/parol yarating.
Keyin Firestore -> users collection ichida admin UID bilan document yarating:

```json
{
  "fullName": "Admin",
  "email": "admin@sariqbola.uz",
  "role": "filial_rahbari",
  "filial": "Bosh ofis",
  "active": true
}
```

Shundan keyin admin panel orqali xodimlar yaratish mumkin.

## Rollar

- pizza_maker
- kassir
- razdacha
- moyka
- yetkazib_beruvchi
- universal
- trainer
- manager
- filial_rahbari
