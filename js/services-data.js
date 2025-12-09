/**
 * Kommuna - Services Data
 * Contains detailed information about all available services
 */

window.servicesData = {
    'ai-arende': {
        title: 'AI-assistent för ärendehantering',
        description: `AI-assistenten för ärendehantering hjälper handläggare att effektivisera sitt
arbete genom automatiserad sammanfattning av ärenden, intelligent kategorisering och
förslag på beslut baserat på tidigare liknande ärenden.

Systemet analyserar inkommande dokument och identifierar relevant information,
vilket minskar den manuella hanteringen avsevärt. AI:n lär sig kontinuerligt
från handläggarnas beslut för att förbättra sina rekommendationer över tid.`,
        targets: ['Medarbetare'],
        sectors: ['Alla verksamheter', 'Socialtjänst', 'Miljö & Hälsa', 'Bygglov'],
        techRequirements: [
            'Integration mot ärendehanteringssystem',
            'HTTPS-anslutning till AI-gateway',
            'API-nyckel för autentisering',
            'Minst 100 Mbit/s nätverksanslutning'
        ]
    },
    'chatbot': {
        title: 'Chatbot för invånartjänster',
        description: `En AI-driven chatbot som kan svara på vanliga frågor från invånare dygnet runt.
Chatboten finns tillgänglig på kommunens webbplats och kan hantera frågor om
öppettider, tjänster, blanketter och mycket mer.

Chatboten kan eskalera komplexa frågor till mänskliga handläggare och lära sig
från varje interaktion för att förbättra sina svar över tid. Den stödjer
naturligt språk på svenska och kan hantera flera konversationer samtidigt.`,
        targets: ['Invånare', 'Företagare'],
        sectors: ['Kundtjänst', 'Alla verksamheter'],
        techRequirements: [
            'JavaScript-snippet på webbplatsen',
            'HTTPS-anslutning',
            'Valfritt: Integration mot ärendehantering',
            'Valfritt: BankID för personliga ärenden'
        ]
    },
    'dokument-ai': {
        title: 'Automatisk dokumentgranskning',
        description: `AI-verktyg som automatiskt granskar inkommande dokument som bygglovshandlingar,
ansökningar och bifogade filer. Systemet identifierar om dokument är kompletta,
om det saknas obligatoriska bilagor och om formatkrav är uppfyllda.

Granskningen sker i realtid när dokument laddas upp, vilket ger omedelbar
återkoppling till den som skickar in handlingar. Detta minskar handläggningstider
och förbättrar kvaliteten på inkommande ärenden.`,
        targets: ['Medarbetare', 'Invånare', 'Företagare'],
        sectors: ['Samhällsbyggnad', 'Bygglov', 'Miljö & Hälsa'],
        techRequirements: [
            'Integration mot e-tjänsteplattform',
            'Stöd för PDF, Word, och bildformat',
            'API-åtkomst för dokumentuppladdning',
            'Minst 50 GB lagringsutrymme'
        ]
    },
    'larplattform': {
        title: 'Lärplattform med AI-stöd',
        description: `En modern lärplattform med integrerat AI-stöd som ger elever personlig
handledning och anpassade övningar. AI:n analyserar elevens kunskapsnivå och
anpassar innehållet därefter.

Plattformen stödjer flera ämnen och kan förklara koncept på olika sätt beroende
på elevens behov. Lärare får insikter om klassens framsteg och kan identifiera
elever som behöver extra stöd.`,
        targets: ['Elever', 'Medarbetare'],
        sectors: ['Skola', 'Utbildning'],
        techRequirements: [
            'Integration mot skolplattform (t.ex. Google Classroom, Teams)',
            'Elevidentifiering via SSO',
            'Modern webbläsare (Chrome, Firefox, Edge, Safari)',
            'Stabil internetanslutning'
        ]
    },
    'prediktiv': {
        title: 'Prediktiv analys för underhåll',
        description: `AI-system som analyserar sensordata från kommunala fastigheter och
infrastruktur för att förutspå underhållsbehov innan problem uppstår.
Systemet kan övervaka allt från värmesystem till vattenledningar.

Genom att identifiera mönster i data kan systemet varna för potentiella
fel veckor eller månader i förväg, vilket möjliggör planerat underhåll
istället för akuta reparationer.`,
        targets: ['Medarbetare'],
        sectors: ['Fastighet', 'Teknisk förvaltning', 'VA'],
        techRequirements: [
            'IoT-sensorer i fastigheter/infrastruktur',
            'Integration mot fastighetssystem',
            'Datalagring för historisk analys',
            'VPN-anslutning för säker dataöverföring'
        ]
    },
    'etjanst': {
        title: 'E-tjänsteplattform',
        description: `Gemensam plattform för digitala tjänster där invånare och företag kan
ansöka om tillstånd, anmäla ärenden och följa sina pågående ärenden dygnet runt.

Plattformen erbjuder en enhetlig upplevelse oavsett vilken typ av tjänst
som används och integrerar med kommunernas bakomliggande system för
automatisk ärendehantering.`,
        targets: ['Invånare', 'Företagare'],
        sectors: ['Alla verksamheter'],
        techRequirements: [
            'BankID-integration',
            'Integration mot ärendehanteringssystem',
            'SMTP-server för e-postnotifieringar',
            'SSL-certifikat'
        ]
    },
    'identitet': {
        title: 'Identitets- och behörighetshantering',
        description: `Centraliserad plattform för hantering av användarkonton, roller och
behörigheter för alla kommunanställda. Systemet ger enkel överblick över
vem som har tillgång till vad och möjliggör effektiv on/offboarding.

Stödjer single sign-on (SSO) till alla anslutna system och
multifaktorautentisering för ökad säkerhet.`,
        targets: ['Medarbetare'],
        sectors: ['IT', 'HR', 'Alla verksamheter'],
        techRequirements: [
            'Microsoft Entra ID eller ADFS',
            'SAML 2.0 eller OpenID Connect-stöd',
            'Integration mot HR-system',
            'Nätverksåtkomst till identitetsleverantör'
        ]
    },
    'arkiv': {
        title: 'Digital arkivering',
        description: `Molnbaserad arkivlösning för långtidsbevarande av digitala handlingar
i enlighet med arkivlagstiftningen. Systemet säkerställer att dokument
bevaras i godkända format och med korrekt metadata.

Automatiserad gallring enligt bevarandeplaner och full spårbarhet
av alla åtgärder i arkivet.`,
        targets: ['Medarbetare'],
        sectors: ['Arkiv', 'Alla verksamheter'],
        techRequirements: [
            'Integration mot verksamhetssystem',
            'Stöd för e-arkiv (FGS)',
            'Säker nätverksanslutning',
            'Kapacitet för stora datamängder'
        ]
    },
    'moten': {
        title: 'Digitala möten och samarbete',
        description: `Plattform för videomöten, dokumentsamarbete och digital kommunikation
mellan kommunernas medarbetare. Möjliggör effektivt samarbete oavsett
geografisk placering.

Inkluderar verktyg för mötesbokning, skärmdelning,
whiteboards och gemensam dokumentredigering i realtid.`,
        targets: ['Medarbetare'],
        sectors: ['Alla verksamheter'],
        techRequirements: [
            'Modern webbläsare eller desktop-app',
            'Webbkamera och mikrofon',
            'Minst 10 Mbit/s internetanslutning',
            'SSO-integration'
        ]
    },
    'ekonomi': {
        title: 'Ekonomisystem',
        description: `Gemensamt ekonomisystem för fakturering, bokföring och ekonomisk
rapportering. Systemet stödjer kommunernas krav på redovisning och
ger möjlighet till gemensamma inköp och upphandlingar.

Automatiserad fakturaskanning och matchning mot beställningar
för effektiv fakturahantering.`,
        targets: ['Medarbetare'],
        sectors: ['Ekonomi', 'Alla verksamheter'],
        techRequirements: [
            'Integration mot bank',
            'E-faktura (Peppol)',
            'Nätverksåtkomst till ekonomisystem',
            'Rollbaserad behörighetsstyrning'
        ]
    },
    'api': {
        title: 'API-gateway',
        description: `Central plattform för att koppla samman kommunernas olika system genom
standardiserade API:er. Möjliggör säker och kontrollerad datadelning
mellan system och med externa parter.

Inkluderar API-hantering med dokumentation, versionering,
rate limiting och detaljerad loggning.`,
        targets: ['Medarbetare'],
        sectors: ['IT', 'Integration'],
        techRequirements: [
            'RESTful API-stöd i källsystem',
            'OAuth 2.0 eller API-nyckel',
            'HTTPS-anslutning',
            'Teknisk kompetens för API-utveckling'
        ]
    },
    'meddelande': {
        title: 'Meddelandehubb',
        description: `Integrationsplattform för säker meddelandehantering mellan system
och externa parter. Hanterar formatkonvertering och garanterad
leverans av meddelanden.

Stödjer vanliga meddelandeformat och protokoll för kommunikation
med myndigheter, företag och andra organisationer.`,
        targets: ['Medarbetare'],
        sectors: ['IT', 'Integration', 'Alla verksamheter'],
        techRequirements: [
            'Säker nätverksanslutning (VPN)',
            'Certifikatsbaserad autentisering',
            'Stöd för AS4, SFTP eller REST',
            'Konfiguration av meddelandeflöden'
        ]
    },
    'skola-integration': {
        title: 'Integrationsplattform för skola',
        description: `Specialiserad integrationsplattform som kopplar samman skoladministrativa
system, lärplattformar och nationella tjänster som Skolverket och SCB.

Automatiserar dataöverföring för elevregister, betyg, närvaro och
annan skolrelaterad information enligt gällande standarder.`,
        targets: ['Medarbetare', 'Elever'],
        sectors: ['Skola', 'Utbildning'],
        techRequirements: [
            'Integration mot skoladministrativt system',
            'SS12000-kompatibilitet',
            'Säker anslutning till nationella tjänster',
            'Automatiserad schemaläggning av dataöverföringar'
        ]
    }
};
