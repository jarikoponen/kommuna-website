/**
 * Kommuna - Services Data
 * Contains detailed information about all available services
 */

window.servicesData = {
    'eneo': {
        title: 'Eneo - En generell AI-plattform',
        description: `Eneo är en skalbar digital infrastruktur och AI-plattform utvecklad utifrån
kommunernas behov och med öppenhet och delning som grundprinciper.

Plattformen möjliggör för kommuner att effektivt utveckla, drifta och skala
AI-baserade tjänster. Eneo erbjuder en gemensam grund för automatisering,
analys och innovation inom kommunal verksamhet.

Genom att använda Eneo kan kommunerna dra nytta av modern AI-teknik utan att
behöva bygga upp egen kompetens och infrastruktur från grunden.`,
        targets: ['Medarbetare', 'Invånare', 'Företagare'],
        sectors: ['Alla verksamheter'],
        techRequirements: [
            'HTTPS-anslutning',
            'Integration via API eller webbgränssnitt',
            'Modern webbläsare',
            'Identitetsfederation (Azure AD/ADFS)'
        ]
    },
    'postportal': {
        title: 'Postportal',
        description: `Postportal är en digital lösning för utskick av post - digital eller fysisk -
samt digitalt REK och SMS. Tjänsten effektiviserar distribution och ger full
spårbarhet genom hela flödet.

Med Postportal kan kommunen digitalisera utgående post oavsett om mottagaren
har en digital brevlåda eller ej. Mottagare med digital brevlåda får posten
levererad där, övriga får den via ordinarie postgång.

Lösningen minskar manuell hantering, förkortar handläggningstider och
ser till att all post som går att skicka digitalt skickas digitalt.`,
        targets: ['Medarbetare'],
        sectors: ['Alla verksamheter', 'Kommunikation'],
        techRequirements: [
            'Webbläsare för åtkomst till gränssnittet'
        ]
    },
    'skolskjuts': {
        title: 'Helautomatiserad skolskjuts',
        description: `En helautomatiserad lösning för hantering av skolskjuts som effektiviserar
hela processen från ansökan till genomförande.

Tjänsten hanterar automatiskt ansökningar från vårdnadshavare, beräknar
avstånd och berättigande, planerar optimala rutter och kommunicerar
information till berörda parter.

Genom automatisering minskas administrativ tid avsevärt samtidigt som
servicen till vårdnadshavare och elever förbättras med snabbare besked
och tydligare information.`,
        targets: ['Medarbetare', 'Invånare', 'Elever'],
        sectors: ['Skola', 'Utbildning'],
        techRequirements: [
            'Integration mot elevregister',
            'Kartdata för ruttberäkning',
            'Digital tjänst för ansökningar',
            'SMS/e-post för kommunikation'
        ]
    }
};
