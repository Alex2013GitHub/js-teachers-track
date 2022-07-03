/*
 * Напиши скрипт проверки подписки пользователя при доступе к контенту
 * - Есть три типа подписки: free, pro и vip.
 * - Получить доступ могут только пользователи pro и vip
 */


const sub = 'free'

const canAccessContent = sub ==='pro' || sub ==='vip'

// true || false => true
// false || true => true
// false || false => false

console.log('Есть доступ к контенту?', canAccessContent);