const STORAGE_KEY = "iec62443-3-2-risk-analysis-v1";
const LANGUAGE_STORAGE_KEY = "iec62443-3-2-risk-analysis-language";

let currentLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) || "pl";

const UI_TRANSLATIONS = {
  "Analiza ryzyka": "Risk analysis",
  "Analiza ryzyka CRA / 62443": "CRA / 62443 risk analysis",
  "IEC 62443-3-2": "IEC 62443-3-2",
  "IEC 62443-3-2 + CRA": "IEC 62443-3-2 + CRA",
  "Sekcje aplikacji": "Application sections",
  "Wybór języka": "Language selector",
  "Projekt i SUC": "Project and SUC",
  "Strefy i conduits": "Zones and conduits",
  "Scenariusze ryzyka": "Risk scenarios",
  "Komponenty CRA": "CRA components",
  "CRA Annex I": "CRA Annex I",
  "Podatności": "Vulnerabilities",
  "Dowody": "Evidence",
  "Wymagania": "Requirements",
  "Zatwierdzenie": "Approval",
  "Raport": "Report",
  "Stan projektu": "Project status",
  "Nie zapisano zmian.": "No changes saved.",
  "Narzędzie robocze": "Working tool",
  "Nowy projekt": "New project",
  "Import JSON": "Import JSON",
  "Eksport JSON": "Export JSON",
  "Eksport DOC": "Export DOC",
  "Autosave aktywny": "Autosave active",
  "Nazwa analizy": "Analysis name",
  "Organizacja / projekt": "Organisation / project",
  "Właściciel aktywów": "Asset owner",
  "Wersja dokumentu": "Document version",
  "Data analizy": "Analysis date",
  "Próg ryzyka tolerowanego": "Tolerable risk threshold",
  "Opis SUC": "SUC description",
  "Zdefiniuj system podlegający rozważaniu, granice, punkty dostępu i kryteria ryzyka.": "Define the system under consideration, boundaries, access points and risk criteria.",
  "Granica SUC": "SUC boundary",
  "Punkty dostępu": "Access points",
  "Ryzyko początkowe i uzasadnienie": "Initial risk and rationale",
  "Macierz ryzyka": "Risk matrix",
  "ZCR 1-2: identyfikacja SUC i ryzyko początkowe": "ZCR 1-2: SUC identification and initial risk",
  "Wypełnij podstawy projektu, opis systemu, zakres oraz bazowe kryteria macierzy ryzyka.": "Complete project basics, system description, scope and baseline risk matrix criteria.",
  "Ocena = wpływ x prawdopodobieństwo. Progi możesz dopasować przez tolerowane ryzyko.": "Score = impact x likelihood. You can adjust thresholds through tolerable risk.",
  "ZCR 3: podział na strefy i conduits": "ZCR 3: partition into zones and conduits",
  "Najpierw dodaj strefy, potem powiąż je przez conduits. Każdy wpis trafi do eksportowanego raportu.": "Add zones first, then connect them with conduits. Each entry will be included in the exported report.",
  "Nazwa strefy": "Zone name",
  "Typ strefy": "Zone type",
  "SL-T ogólny": "Overall SL-T",
  "Aktywa": "Assets",
  "Granice i założenia separacji": "Boundaries and separation assumptions",
  "Dodaj strefę": "Add zone",
  "Strefy": "Zones",
  "Nazwa conduit": "Conduit name",
  "Ze strefy": "From zone",
  "Do strefy": "To zone",
  "Protokoły / przepływy": "Protocols / flows",
  "Środki ochronne i ograniczenia": "Protection measures and constraints",
  "Dodaj conduit": "Add conduit",
  "ZCR 4-5: szczegółowa ocena ryzyka": "ZCR 4-5: detailed risk assessment",
  "Każdy scenariusz wylicza ryzyko przed i po uwzględnieniu zabezpieczeń. Przekroczenia progu są oznaczane automatycznie.": "Each scenario calculates risk before and after controls. Threshold exceedances are marked automatically.",
  "Obszar": "Target",
  "Zagrożenie": "Threat",
  "Podatność": "Vulnerability",
  "Konsekwencja": "Consequence",
  "Wpływ przed zabezp.": "Impact before controls",
  "Prawdop. przed zabezp.": "Likelihood before controls",
  "Wpływ po zabezp.": "Impact after controls",
  "Prawdop. po zabezp.": "Likelihood after controls",
  "Istniejące zabezpieczenia": "Existing controls",
  "Dodatkowe środki / wymagania": "Additional measures / requirements",
  "Właściciel działania": "Action owner",
  "Termin": "Due date",
  "Decyzja": "Decision",
  "Dodaj scenariusz": "Add scenario",
  "Rejestr scenariuszy": "Scenario register",
  "CRA: klasyfikacja komponentów TCMS/PIS": "CRA: TCMS/PIS component classification",
  "Rejestr obejmuje komponenty sprzętowe, software, firmware i usługi remote data processing związane z produktem.": "The register covers hardware components, software, firmware and product-related remote data processing services.",
  "Nazwa komponentu": "Component name",
  "Obszar pojazdu": "Vehicle area",
  "Typ": "Type",
  "Wersja / wariant": "Version / variant",
  "Dostawca / producent": "Supplier / manufacturer",
  "Rola w CRA": "CRA role",
  "Status zakresu CRA": "CRA scope status",
  "Support period do": "Support period until",
  "Kategoria CRA": "CRA category",
  "Ocena zgodności": "Conformity assessment",
  "Kontakt bezpieczeństwa": "Security contact",
  "Zastosowanie i funkcje": "Intended use and functions",
  "Interfejsy i połączenia": "Interfaces and connections",
  "Uzasadnienie klasyfikacji": "Classification rationale",
  "Dodaj komponent": "Add component",
  "Rejestr komponentów": "Component register",
  "CRA: wymagania, dowody i instrukcje użytkownika": "CRA: requirements, evidence and user instructions",
  "Macierz jest roboczą, sparafrazowaną listą kontroli pod CRA: właściwości produktu oraz obsługa podatności w okresie wsparcia.": "The matrix is a working, paraphrased CRA control list: product properties and vulnerability handling during the support period.",
  "Normy i specyfikacje użyte jako dowód": "Standards and specifications used as evidence",
  "Instrukcje bezpiecznej instalacji i eksploatacji": "Secure installation and operation instructions",
  "Plan obsługi podatności i aktualizacji": "Vulnerability and update handling plan",
  "Notatki do EU Declaration of Conformity / CE": "Notes for EU Declaration of Conformity / CE",
  "Macierz wymagań CRA": "CRA requirements matrix",
  "CRA: SBOM i komponenty third-party": "CRA: SBOM and third-party components",
  "Rejestr można prowadzić per produkt, firmware, aplikację PIS, gateway, router lub narzędzie serwisowe.": "The register can be maintained per product, firmware, PIS application, gateway, router or service tool.",
  "Komponent produktu": "Product component",
  "Nazwa składnika": "Item name",
  "Wersja": "Version",
  "Dostawca / maintainer": "Supplier / maintainer",
  "Licencja": "Licence",
  "Źródło": "Source",
  "Status CVE": "CVE status",
  "Status aktualizacji": "Update status",
  "Notatki / uzasadnienie": "Notes / rationale",
  "Dodaj składnik SBOM": "Add SBOM item",
  "Rejestr SBOM": "SBOM register",
  "CRA: podatności, incydenty i raportowanie": "CRA: vulnerabilities, incidents and reporting",
  "Rejestr pomaga kontrolować aktywnie wykorzystywane podatności, poważne incydenty oraz obowiązki raportowe.": "The register helps track actively exploited vulnerabilities, severe incidents and reporting obligations.",
  "Komponent": "Component",
  "Typ wpisu": "Entry type",
  "ID / źródło": "ID / source",
  "Aktywnie wykorzystywana": "Actively exploited",
  "Data wykrycia": "Discovery date",
  "Status poprawki": "Patch status",
  "Status raportowania": "Reporting status",
  "Opis wpływu": "Impact description",
  "Mitigacja / komunikacja": "Mitigation / communication",
  "Dodaj wpis": "Add entry",
  "Rejestr podatności i incydentów": "Vulnerability and incident register",
  "Traceability: ryzyko → wymaganie → kontrola → test → dowód": "Traceability: risk → requirement → control → test → evidence",
  "Ten rejestr jest najważniejszy przy przeglądzie technicznym, audycie dostawcy albo przygotowaniu technical documentation.": "This register is the most important artifact for technical reviews, supplier audits or technical documentation preparation.",
  "Scenariusz ryzyka": "Risk scenario",
  "Wymaganie": "Requirement",
  "Kontrola / wymaganie projektowe": "Control / design requirement",
  "Test / weryfikacja": "Test / verification",
  "Wynik": "Result",
  "Właściciel": "Owner",
  "Dowód / referencja": "Evidence / reference",
  "Dodaj dowód": "Add evidence",
  "Rejestr dowodów": "Evidence register",
  "ZCR 6: wymagania, założenia i ograniczenia": "ZCR 6: requirements, assumptions and constraints",
  "Ta sekcja składa raport w spójną specyfikację wymagań cyberbezpieczeństwa dla projektu.": "This section turns the report into a coherent cybersecurity requirements specification for the project.",
  "Specyfikacja wymagań cyberbezpieczeństwa": "Cybersecurity requirements specification",
  "Rysunki / odniesienia do stref i conduits": "Zone and conduit drawings / references",
  "Charakterystyka stref i conduits": "Zone and conduit characteristics",
  "Założenia środowiska operacyjnego": "Operating environment assumptions",
  "Środowisko zagrożeń": "Threat environment",
  "Polityki organizacyjne": "Organisational policies",
  "Tolerowane ryzyko": "Tolerable risk",
  "Wymagania regulacyjne i kontraktowe": "Regulatory and contractual requirements",
  "Kontrola kompletności ZCR": "ZCR completeness check",
  "ZCR 7: zatwierdzenie właściciela aktywów": "ZCR 7: asset owner approval",
  "Zatwierdzenie powinno obejmować zakres, wyniki, ryzyko rezydualne i otwarte działania.": "Approval should cover the scope, results, residual risk and open actions.",
  "Osoba zatwierdzająca": "Approver",
  "Data zatwierdzenia": "Approval date",
  "Następny przegląd": "Next review",
  "Notatki zatwierdzającego": "Approver notes",
  "Podgląd eksportu": "Export preview",
  "Raport składa dane projektu, strefy, conduits, scenariusze, pakiet CRA, SBOM, podatności, dowody, checklistę i zatwierdzenie.": "The report includes project data, zones, conduits, scenarios, CRA package, SBOM, vulnerabilities, evidence, checklist and approval.",
  "Niskie": "Low",
  "Średnie": "Medium",
  "Wysokie": "High",
  "Krytyczne": "Critical",
  "Nie rozpoczęto": "Not started",
  "W toku": "In progress",
  "Gotowe": "Done",
  "Nie dotyczy": "Not applicable",
  "Szkic": "Draft",
  "Zatwierdzone": "Approved",
  "Zatwierdzone z działaniami": "Approved with actions",
  "Odrzucone": "Rejected",
  "Mitygować": "Mitigate",
  "Akceptować": "Accept",
  "Transferować": "Transfer",
  "Unikać": "Avoid",
  "Planowane": "Planned",
  "Akceptacja z odstępstwem": "Accepted with deviation",
  "Cały SUC": "Whole SUC",
  "Strefa": "Zone",
  "Komponent bez nazwy": "Unnamed component",
  "Scenariusz bez nazwy": "Unnamed scenario",
  "Brak komponentów": "No components",
  "Wybierz komponent": "Select component",
  "Wszystkie / ogólne": "All / generic",
  "Wybierz scenariusz": "Select scenario",
  "Wybierz wymaganie": "Select requirement",
  "Brak scenariuszy": "No scenarios",
  "Brak stref": "No zones",
  "Najpierw dodaj strefę": "Add a zone first",
  "Brak": "None",
  "brak przekroczeń": "no exceedances",
  "w progu": "within threshold",
  "ponad próg": "above threshold",
  "w progu tolerancji": "within tolerance",
  "wymaga decyzji": "requires decision",
  "docelowo": "target",
  "łącznie": "total",
  "zdefiniowane": "defined",
  "decyzja Accept": "Accept decision",
  "ryzyko rezydualne": "residual risk",
  "Wyczyść bieżący projekt": "Clear the current project",
  "Wczytaj wcześniej zapisany plik JSON": "Load a previously saved JSON file",
  "Zapisz kopię danych projektu": "Save a copy of project data",
  "Wygeneruj raport Word w formacie DOC": "Generate a Word report in DOC format",
  "np. Analiza ryzyka systemu TCMS": "e.g. TCMS system risk analysis",
  "np. Stadler": "e.g. Stadler",
  "imię, zespół lub rola": "name, team or role",
  "np. 0.1": "e.g. 0.1",
  "Opisz system podlegający rozważaniu, funkcje, użytkowników i zależności operacyjne.": "Describe the system under consideration, functions, users and operational dependencies.",
  "Opisz granice techniczne i organizacyjne, interfejsy oraz elementy poza zakresem.": "Describe technical and organisational boundaries, interfaces and out-of-scope elements.",
  "Wymień porty serwisowe, dostęp zdalny, sieci zewnętrzne, transfer plików, media wymienne.": "List service ports, remote access, external networks, file transfer and removable media.",
  "Podsumuj wstępne ryzyka przed szczegółową analizą stref i scenariuszy.": "Summarise initial risks before detailed zone and scenario analysis.",
  "np. Zone-Cab-Control": "e.g. Zone-Cab-Control",
  "Sterowniki, HMI, stacje inżynierskie, serwery, urządzenia sieciowe.": "Controllers, HMI, engineering stations, servers, network devices.",
  "Opis zaufania, segmentacji, ograniczeń oraz wyjątków.": "Description of trust, segmentation, constraints and exceptions.",
  "np. Remote-service-conduit": "e.g. Remote-service-conduit",
  "np. OPC UA, SSH, HTTPS, diagnostyka producenta, transfer plików.": "e.g. OPC UA, SSH, HTTPS, vendor diagnostics, file transfer.",
  "np. firewall, jump host, MFA, allowlist, monitoring, procedury serwisowe.": "e.g. firewall, jump host, MFA, allowlist, monitoring, service procedures.",
  "np. nieautoryzowany dostęp zdalny": "e.g. unauthorised remote access",
  "Słabość techniczna, proceduralna lub organizacyjna.": "Technical, procedural or organisational weakness.",
  "Wpływ na bezpieczeństwo, dostępność, integralność, operacje, zgodność.": "Impact on safety, availability, integrity, operations and compliance.",
  "Zabezpieczenia już wdrożone lub zakontraktowane.": "Controls already implemented or contracted.",
  "Działania potrzebne, gdy ryzyko przekracza próg tolerowany.": "Actions needed when risk exceeds the tolerable threshold.",
  "rola lub osoba": "role or person",
  "np. PIS Controller, TCMS Gateway": "e.g. PIS Controller, TCMS Gateway",
  "wersja HW/SW/FW": "HW/SW/FW version",
  "nazwa dostawcy": "supplier name",
  "email / rola": "email / role",
  "Funkcja w pojeździe, tryby pracy, przewidywane użycie.": "Vehicle function, operating modes, intended use.",
  "Ethernet, MVB/WTB, CAN, Wi-Fi, LTE/5G, USB, port diagnostyczny, API.": "Ethernet, MVB/WTB, CAN, Wi-Fi, LTE/5G, USB, diagnostic port, API.",
  "Dlaczego komponent jest albo nie jest w zakresie CRA, kategoria i procedura oceny.": "Why the component is or is not in CRA scope, category and assessment procedure.",
  "np. IEC 62443-4-1, IEC 62443-4-2, IEC 62443-3-3, EN 50701, EN 50159, normy zharmonizowane CRA gdy dostępne.": "e.g. IEC 62443-4-1, IEC 62443-4-2, IEC 62443-3-3, EN 50701, EN 50159, CRA harmonised standards when available.",
  "Wymagania dla integratora/operatora: konfiguracja, konta, aktualizacje, logi, backup, remote access, wyłączenia funkcji.": "Requirements for the integrator/operator: configuration, accounts, updates, logs, backup, remote access, disabled functions.",
  "Kanał zgłoszeń, triage, SLA, publikacja advisory, poprawki, backporty, komunikacja z klientami.": "Reporting channel, triage, SLA, advisory publication, fixes, backports, customer communication.",
  "Zakres deklaracji, warianty produktu, wyłączenia, dokumenty techniczne, status notified body.": "Declaration scope, product variants, exclusions, technical documents, notified body status.",
  "np. OpenSSL, Linux kernel, Qt": "e.g. OpenSSL, Linux kernel, Qt",
  "np. 3.0.13": "e.g. 3.0.13",
  "np. Apache-2.0, GPL-2.0": "e.g. Apache-2.0, GPL-2.0",
  "repo, package manager, dostawca": "repo, package manager, supplier",
  "CVE, kompensacje, powód zamrożenia wersji, ograniczenia środowiska kolejowego.": "CVE, compensating controls, reason for version pinning, railway environment constraints.",
  "CVE, advisory, ticket": "CVE, advisory, ticket",
  "Wpływ na produkt, pojazd, operatora, pasażerów, dostępność, integralność lub poufność.": "Impact on the product, vehicle, operator, passengers, availability, integrity or confidentiality.",
  "Działania, obejścia, poprawka, advisory, komunikacja z klientem, CSIRT/ENISA.": "Actions, workarounds, fix, advisory, customer communication, CSIRT/ENISA.",
  "Środek techniczny lub procesowy, który realizuje wymaganie.": "Technical or process control that fulfils the requirement.",
  "Analiza, test penetracyjny, test konfiguracji, review, skan CVE, test aktualizacji.": "Analysis, penetration test, configuration test, review, CVE scan, update test.",
  "raport, ticket, commit, konfiguracja, procedura": "report, ticket, commit, configuration, procedure",
  "dowód / dokument / test": "evidence / document / test",
  "notatka / dowód": "note / evidence"
  ,
  "Utworzyć nowy pusty projekt? Bieżący stan w przeglądarce zostanie zastąpiony.": "Create a new empty project? The current browser state will be replaced.",
  "Utworzono nowy projekt.": "Created a new project.",
  "Zaimportowano dane projektu.": "Project data imported.",
  "Nie udało się zaimportować JSON.": "Could not import JSON.",
  "Dodano strefę.": "Zone added.",
  "Najpierw dodaj co najmniej jedną strefę.": "Add at least one zone first.",
  "Dodano conduit.": "Conduit added.",
  "Dodano scenariusz ryzyka.": "Risk scenario added.",
  "Dodano komponent CRA.": "CRA component added.",
  "Dodano składnik SBOM.": "SBOM item added.",
  "Dodano wpis podatności/incydentu.": "Vulnerability/incident entry added.",
  "Dodano dowód traceability.": "Traceability evidence added.",
  "Usunięto strefę.": "Zone removed.",
  "Usunięto conduit.": "Conduit removed.",
  "Usunięto scenariusz.": "Scenario removed.",
  "Usunięto komponent CRA.": "CRA component removed.",
  "Usunięto składnik SBOM.": "SBOM item removed.",
  "Usunięto wpis podatności/incydentu.": "Vulnerability/incident entry removed.",
  "Usunięto dowód traceability.": "Traceability evidence removed.",
  "Wyeksportowano JSON.": "JSON exported.",
  "Wygenerowano dokument DOC.": "DOC document generated.",
  "Zapisano lokalnie": "Saved locally",
  "Stan będzie zapisany automatycznie.": "State will be saved automatically.",
  "Ostatni zapis": "Last save",
  "Nieokreślony": "Unspecified"
  ,
  "Informacja pasażerska": "Passenger information",
  "Sieć pokładowa": "On-board network",
  "Remote service / train-to-ground": "Remote service / train-to-ground",
  "Utrzymanie / diagnostyka": "Maintenance / diagnostics",
  "Passenger Wi-Fi / usługi pasażerskie": "Passenger Wi-Fi / passenger services",
  "Inny": "Other",
  "Urządzenie sieciowe": "Network device",
  "Narzędzie serwisowe": "Service tool",
  "Do ustalenia": "To be assessed",
  "W zakresie": "In scope",
  "Poza zakresem": "Out of scope",
  "Wymaga oceny prawnej": "Needs legal assessment",
  "Nie wprowadzany osobno": "Not placed separately",
  "Normy zharmonizowane wymagane": "Harmonised standards required",
  "Prawdopodobnie notified body": "Notified body likely",
  "Notified body wymagany": "Notified body mandatory",
  "Nie sprawdzono": "Not checked",
  "Brak znanych CVE": "No known CVE",
  "CVE zaakceptowane": "Known CVE accepted",
  "CVE zmitygowane": "Known CVE mitigated",
  "Wymaga poprawki": "Patch required",
  "Aktualny": "Current",
  "Aktualizacja planowana": "Update planned",
  "Wersja zamrożona": "Pinned",
  "Koniec wsparcia": "End of support",
  "Podatność": "Vulnerability",
  "Poważny incydent": "Severe incident",
  "Nie": "No",
  "Tak": "Yes",
  "Nie wiadomo": "Unknown",
  "Poprawka planowana": "Patch planned",
  "Poprawka dostępna": "Patch available",
  "Zmitygowane": "Mitigated",
  "Zaakceptowane": "Accepted",
  "Zamknięte": "Closed",
  "Nie podlega": "Not reportable",
  "Ocenić raportowalność": "Assess reportability",
  "Zgłoszone": "Reported",
  "Organizacja": "Organisation",
  "Właściciel aktywów": "Asset owner",
  "Data": "Date",
  "Zakres SUC": "SUC scope",
  "Granica": "Boundary",
  "Najwyższe ryzyka rezydualne": "Highest residual risks",
  "CRA: komponenty i luki": "CRA: components and gaps",
  "Komponenty do oceny": "Components to assess",
  "Otwarte wymagania CRA": "Open CRA requirements",
  "SBOM wymagający reakcji": "SBOM requiring action",
  "Raportowanie do oceny": "Reporting to assess",
  "Komponenty CRA": "CRA components",
  "składniki": "items",
  "Podatności": "Vulnerabilities",
  "do oceny raportowania": "for reporting assessment",
  "brak raportowalnych": "no reportable items",
  "ZCR gotowe": "ZCR done",
  "CRA gotowe": "CRA done",
  "Annex I": "Annex I",
  "Identyfikacja i uwierzytelnianie": "Identification and authentication control",
  "Kontrola użycia": "Use control",
  "Integralność systemu": "System integrity",
  "Poufność danych": "Data confidentiality",
  "Ograniczenie przepływu danych": "Restricted data flow",
  "Terminowa reakcja na zdarzenia": "Timely response to events",
  "Dostępność zasobów": "Resource availability",
  "Zidentyfikuj granice SUC i punkty dostępu": "Identify the SUC boundaries and access points",
  "Wykonaj początkową ocenę ryzyka cyberbezpieczeństwa": "Perform the initial cybersecurity risk assessment",
  "Ustanów strefy i conduits": "Establish zones and conduits",
  "Rozdziel aktywa biznesowe i IACS": "Separate business and IACS assets",
  "Rozdziel aktywa związane z safety": "Separate safety-related assets",
  "Rozdziel urządzenia tymczasowo podłączane": "Separate temporarily connected devices",
  "Rozdziel urządzenia bezprzewodowe": "Separate wireless devices",
  "Rozdziel urządzenia połączone przez sieci zewnętrzne": "Separate devices connected through external networks",
  "Porównaj ryzyko początkowe z ryzykiem tolerowanym": "Compare initial risk with tolerable risk",
  "Zidentyfikuj zagrożenia": "Identify threats",
  "Zidentyfikuj podatności": "Identify vulnerabilities",
  "Określ konsekwencje i wpływ": "Determine consequence and impact",
  "Określ prawdopodobieństwo bez mitygacji": "Determine unmitigated likelihood",
  "Określ ryzyko bez mitygacji": "Determine unmitigated risk",
  "Określ SL-T": "Determine SL-T",
  "Porównaj ryzyko bez mitygacji z ryzykiem tolerowanym": "Compare unmitigated risk with tolerable risk",
  "Zidentyfikuj i oceń istniejące zabezpieczenia": "Identify and evaluate existing countermeasures",
  "Ponownie oceń prawdopodobieństwo i wpływ": "Re-evaluate likelihood and impact",
  "Określ ryzyko rezydualne": "Determine residual risk",
  "Porównaj ryzyko rezydualne z ryzykiem tolerowanym": "Compare residual risk with tolerable risk",
  "Zidentyfikuj dodatkowe środki cyberbezpieczeństwa": "Identify additional cybersecurity countermeasures",
  "Udokumentuj i zakomunikuj wyniki": "Document and communicate results",
  "Udokumentuj specyfikację wymagań cyberbezpieczeństwa": "Document the cybersecurity requirements specification",
  "Udokumentuj opis SUC": "Document the SUC description",
  "Udokumentuj rysunki stref i conduits": "Document zone and conduit drawings",
  "Udokumentuj charakterystyki stref i conduits": "Document zone and conduit characteristics",
  "Udokumentuj założenia środowiska operacyjnego": "Document operating environment assumptions",
  "Udokumentuj środowisko zagrożeń": "Document the threat environment",
  "Udokumentuj polityki organizacyjne": "Document organisational security policies",
  "Udokumentuj ryzyko tolerowane": "Document tolerable risk",
  "Udokumentuj wymagania regulacyjne": "Document regulatory requirements",
  "Uzyskaj zatwierdzenie właściciela aktywów": "Obtain asset owner approval",
  "Bezpieczna konfiguracja domyślna": "Secure default configuration",
  "Kontrola dostępu i tożsamości": "Access control and identity",
  "Integralność danych i konfiguracji": "Data and configuration integrity",
  "Minimalizacja danych i powierzchni ataku": "Data and attack surface minimisation",
  "Odporność i dostępność": "Resilience and availability",
  "Logowanie i monitoring": "Logging and monitoring",
  "Bezpieczne aktualizacje": "Secure updates",
  "Bezpieczne usuwanie i wycofanie": "Secure deletion and decommissioning",
  "Proces obsługi podatności": "Vulnerability handling process",
  "SBOM i komponenty third-party": "SBOM and third-party components",
  "Testy bezpieczeństwa": "Security testing",
  "Raportowanie aktywnie wykorzystywanych podatności i poważnych incydentów": "Reporting actively exploited vulnerabilities and severe incidents",
  "Reportowanie aktywnie wykorzystywanych podatności i poważnych incydentów": "Reporting actively exploited vulnerabilities and severe incidents",
  "Produkt zaprojektowany, rozwijany i produkowany z poziomem cyberbezpieczeństwa adekwatnym do ryzyka.": "The product is designed, developed and produced with a cybersecurity level appropriate to the risk.",
  "Domyślne ustawienia minimalizują ryzyko, bez słabych haseł i z możliwością bezpiecznego resetu.": "Default settings minimise risk, avoid weak passwords and support secure reset.",
  "Ochrona przed nieautoryzowanym dostępem przez uwierzytelnianie, autoryzację i zarządzanie tożsamością.": "Protection against unauthorised access through authentication, authorisation and identity management.",
  "Dane przetwarzane, przechowywane i transmitowane są chronione adekwatnie do ryzyka.": "Processed, stored and transmitted data is protected appropriately to the risk.",
  "Produkt chroni dane, polecenia, konfigurację i firmware przed nieuprawnioną zmianą.": "The product protects data, commands, configuration and firmware against unauthorised modification.",
  "Produkt ogranicza zbędne funkcje, porty, usługi, uprawnienia i dane do niezbędnego minimum.": "The product limits unnecessary functions, ports, services, privileges and data to the necessary minimum.",
  "Produkt ogranicza skutki DoS, wyczerpania zasobów, błędów wejścia i utraty zasilania lub łączności.": "The product limits the effects of DoS, resource exhaustion, input errors and loss of power or connectivity.",
  "Produkt wspiera wykrywanie, rejestrowanie i analizę zdarzeń bezpieczeństwa adekwatnie do funkcji.": "The product supports detection, logging and analysis of security events appropriate to its functions.",
  "Aktualizacje bezpieczeństwa są dostarczane, weryfikowane, możliwe do wdrożenia i oddzielone od zmian funkcjonalnych tam, gdzie to właściwe.": "Security updates are provided, verified, deployable and separated from functional changes where appropriate.",
  "Produkt pozwala usunąć dane, sekrety i konfigurację przed przekazaniem, serwisem lub końcem życia.": "The product allows data, secrets and configuration to be removed before transfer, service or end of life.",
  "Producent utrzymuje proces identyfikacji, triage, korekty i publikacji informacji o podatnościach.": "The manufacturer maintains a process for identification, triage, remediation and publication of vulnerability information.",
  "Składniki software/firmware oraz zależności third-party są identyfikowane, utrzymywane i możliwe do powiązania z podatnościami.": "Software/firmware components and third-party dependencies are identified, maintained and linkable to vulnerabilities.",
  "Produkt i jego komponenty są regularnie testowane pod kątem podatności i odporności na znane klasy ataków.": "The product and its components are regularly tested for vulnerabilities and resistance to known attack classes.",
  "Dostępny jest kanał zgłoszeń, zasady koordynacji, komunikacja z reporterami i klientami.": "A reporting channel, coordination rules and communication with reporters and customers are available.",
  "Proces wspiera terminy 24h/72h, final report oraz komunikację przez właściwe kanały CRA.": "The process supports 24h/72h timelines, final reports and communication through the relevant CRA channels.",
  "Podziel SUC na strefy i połączenia, rozdziel aktywa biznesowe, IACS, safety, bezprzewodowe, tymczasowe i zewnętrzne.": "Partition the SUC into zones and connections, separating business, IACS, safety, wireless, temporary and external assets.",
  "Zidentyfikuj zagrożenia, podatności, wpływ, prawdopodobieństwo, SL-T, istniejące zabezpieczenia i ryzyko rezydualne.": "Identify threats, vulnerabilities, impact, likelihood, SL-T, existing controls and residual risk.",
  "Sklasyfikuj komponenty TCMS/PIS jako produkty z elementami cyfrowymi, określ rolę operatora, kategorię CRA, support period i procedurę oceny zgodności.": "Classify TCMS/PIS components as products with digital elements and define the operator role, CRA category, support period and conformity assessment procedure.",
  "Zmapuj wymagania CRA Annex I na komponenty, ryzyka, środki techniczne i dowody zgodności.": "Map CRA Annex I requirements to components, risks, technical measures and conformity evidence.",
  "Zbierz komponenty software, firmware, biblioteki open-source i third-party wraz z wersją, licencją, CVE i statusem aktualizacji.": "Collect software, firmware, open-source and third-party components with version, licence, CVE and update status.",
  "Prowadź rejestr podatności i incydentów pod CRA z terminami 24h/72h, statusem poprawki i komunikacją.": "Maintain a CRA vulnerability and incident register with 24h/72h deadlines, patch status and communication.",
  "Połącz ryzyka, komponenty, wymagania CRA/62443, środki techniczne, testy i dowody do pakietu audytowego.": "Link risks, components, CRA/62443 requirements, technical measures, tests and evidence into an audit package.",
  "Udokumentuj wymagania cyberbezpieczeństwa, założenia, polityki, tolerancję ryzyka i wymagania regulacyjne.": "Document cybersecurity requirements, assumptions, policies, risk tolerance and regulatory requirements.",
  "Zarejestruj decyzję właściciela aktywów oraz pozostałe ryzyka wymagające akceptacji lub dalszego planu.": "Record the asset owner decision and remaining risks requiring acceptance or further action.",
  "Sprawdź kompletność i wygeneruj raport Word DOC lub kopię danych JSON.": "Check completeness and generate a Word DOC report or JSON data copy.",
  "Wymagania wynikające z ryzyka, SL-T, polityk, architektury i kontraktu.": "Requirements derived from risk, SL-T, policies, architecture and contract.",
  "Nazwy diagramów, linki, numery dokumentów, wersje.": "Diagram names, links, document numbers and versions.",
  "Zaufanie, krytyczność, poziomy SL-T, aktywa, przepływy, założenia separacji.": "Trust, criticality, SL-T levels, assets, flows and separation assumptions.",
  "Założenia dotyczące eksploatacji, utrzymania, personelu, dostawców i fizycznego środowiska pracy.": "Assumptions about operation, maintenance, personnel, suppliers and the physical operating environment.",
  "Profil atakujących, dostępne wektory, ekspozycja zewnętrzna, historia incydentów.": "Threat actor profile, available vectors, external exposure and incident history.",
  "Polityki dostępu, zdalnego serwisu, haseł, kopii zapasowych, patchowania, logowania.": "Policies for access, remote service, passwords, backups, patching and logging.",
  "Kryteria akceptacji, macierz, właściciel decyzji, wyjątki i eskalacja.": "Acceptance criteria, matrix, decision owner, exceptions and escalation.",
  "Normy, przepisy, wymagania klienta, wymagania kolejowe lub sektorowe.": "Standards, regulations, customer requirements, railway or sector requirements.",
  "Warunki akceptacji, wyjątki, ryzyka świadomie zaakceptowane, wymagane działania.": "Acceptance conditions, exceptions, consciously accepted risks and required actions.",
  "imię, nazwisko, rola": "name, surname, role",
  "Brak opisu SUC.": "No SUC description.",
  "Brak opisu granicy.": "No boundary description.",
  "brak wersji": "no version",
  "0 - nieokreślony": "0 - unspecified",
  "Nazwa": "Name",
  "Usuń": "Delete",
  "Środki ochronne": "Protection measures",
  "Wpływ przed": "Impact before",
  "Wpływ po": "Impact after",
  "Prawdop. przed": "Likelihood before",
  "Prawdop. po": "Likelihood after",
  "Prawd. \\ Wpływ": "Likelihood \\ Impact",
  "Próg tolerowany": "Tolerable threshold",
  "Ponad próg": "Above threshold",
  "Działania": "Actions",
  "Scenariusze": "Scenarios"
};

const FR_LEVELS = [
  { key: "iac", label: "IAC", title: "Identyfikacja i uwierzytelnianie" },
  { key: "uc", label: "UC", title: "Kontrola użycia" },
  { key: "si", label: "SI", title: "Integralność systemu" },
  { key: "dc", label: "DC", title: "Poufność danych" },
  { key: "rdf", label: "RDF", title: "Ograniczenie przepływu danych" },
  { key: "tre", label: "TRE", title: "Terminowa reakcja na zdarzenia" },
  { key: "ra", label: "RA", title: "Dostępność zasobów" }
];

const ZCR_ITEMS = [
  ["ZCR 1.1", "Zidentyfikuj granice SUC i punkty dostępu"],
  ["ZCR 2.1", "Wykonaj początkową ocenę ryzyka cyberbezpieczeństwa"],
  ["ZCR 3.1", "Ustanów strefy i conduits"],
  ["ZCR 3.2", "Rozdziel aktywa biznesowe i IACS"],
  ["ZCR 3.3", "Rozdziel aktywa związane z safety"],
  ["ZCR 3.4", "Rozdziel urządzenia tymczasowo podłączane"],
  ["ZCR 3.5", "Rozdziel urządzenia bezprzewodowe"],
  ["ZCR 3.6", "Rozdziel urządzenia połączone przez sieci zewnętrzne"],
  ["ZCR 4.1", "Porównaj ryzyko początkowe z ryzykiem tolerowanym"],
  ["ZCR 5.1", "Zidentyfikuj zagrożenia"],
  ["ZCR 5.2", "Zidentyfikuj podatności"],
  ["ZCR 5.3", "Określ konsekwencje i wpływ"],
  ["ZCR 5.4", "Określ prawdopodobieństwo bez mitygacji"],
  ["ZCR 5.5", "Określ ryzyko bez mitygacji"],
  ["ZCR 5.6", "Określ SL-T"],
  ["ZCR 5.7", "Porównaj ryzyko bez mitygacji z ryzykiem tolerowanym"],
  ["ZCR 5.8", "Zidentyfikuj i oceń istniejące zabezpieczenia"],
  ["ZCR 5.9", "Ponownie oceń prawdopodobieństwo i wpływ"],
  ["ZCR 5.10", "Określ ryzyko rezydualne"],
  ["ZCR 5.11", "Porównaj ryzyko rezydualne z ryzykiem tolerowanym"],
  ["ZCR 5.12", "Zidentyfikuj dodatkowe środki cyberbezpieczeństwa"],
  ["ZCR 5.13", "Udokumentuj i zakomunikuj wyniki"],
  ["ZCR 6.1", "Udokumentuj specyfikację wymagań cyberbezpieczeństwa"],
  ["ZCR 6.2", "Udokumentuj opis SUC"],
  ["ZCR 6.3", "Udokumentuj rysunki stref i conduits"],
  ["ZCR 6.4", "Udokumentuj charakterystyki stref i conduits"],
  ["ZCR 6.5", "Udokumentuj założenia środowiska operacyjnego"],
  ["ZCR 6.6", "Udokumentuj środowisko zagrożeń"],
  ["ZCR 6.7", "Udokumentuj polityki organizacyjne"],
  ["ZCR 6.8", "Udokumentuj ryzyko tolerowane"],
  ["ZCR 6.9", "Udokumentuj wymagania regulacyjne"],
  ["ZCR 7.1", "Uzyskaj zatwierdzenie właściciela aktywów"]
];

const STATUS_OPTIONS = [
  ["not-started", "Nie rozpoczęto"],
  ["in-progress", "W toku"],
  ["done", "Gotowe"],
  ["na", "Nie dotyczy"]
];

const CRA_REQUIREMENTS = [
  ["CRA-I-01", "Security by design/default", "Produkt zaprojektowany, rozwijany i produkowany z poziomem cyberbezpieczeństwa adekwatnym do ryzyka."],
  ["CRA-I-02", "Bezpieczna konfiguracja domyślna", "Domyślne ustawienia minimalizują ryzyko, bez słabych haseł i z możliwością bezpiecznego resetu."],
  ["CRA-I-03", "Kontrola dostępu i tożsamości", "Ochrona przed nieautoryzowanym dostępem przez uwierzytelnianie, autoryzację i zarządzanie tożsamością."],
  ["CRA-I-04", "Poufność danych", "Dane przetwarzane, przechowywane i transmitowane są chronione adekwatnie do ryzyka."],
  ["CRA-I-05", "Integralność danych i konfiguracji", "Produkt chroni dane, polecenia, konfigurację i firmware przed nieuprawnioną zmianą."],
  ["CRA-I-06", "Minimalizacja danych i powierzchni ataku", "Produkt ogranicza zbędne funkcje, porty, usługi, uprawnienia i dane do niezbędnego minimum."],
  ["CRA-I-07", "Odporność i dostępność", "Produkt ogranicza skutki DoS, wyczerpania zasobów, błędów wejścia i utraty zasilania lub łączności."],
  ["CRA-I-08", "Logowanie i monitoring", "Produkt wspiera wykrywanie, rejestrowanie i analizę zdarzeń bezpieczeństwa adekwatnie do funkcji."],
  ["CRA-I-09", "Bezpieczne aktualizacje", "Aktualizacje bezpieczeństwa są dostarczane, weryfikowane, możliwe do wdrożenia i oddzielone od zmian funkcjonalnych tam, gdzie to właściwe."],
  ["CRA-I-10", "Bezpieczne usuwanie i wycofanie", "Produkt pozwala usunąć dane, sekrety i konfigurację przed przekazaniem, serwisem lub końcem życia."],
  ["CRA-II-01", "Proces obsługi podatności", "Producent utrzymuje proces identyfikacji, triage, korekty i publikacji informacji o podatnościach."],
  ["CRA-II-02", "SBOM i komponenty third-party", "Składniki software/firmware oraz zależności third-party są identyfikowane, utrzymywane i możliwe do powiązania z podatnościami."],
  ["CRA-II-03", "Testy bezpieczeństwa", "Produkt i jego komponenty są regularnie testowane pod kątem podatności i odporności na znane klasy ataków."],
  ["CRA-II-04", "Coordinated vulnerability disclosure", "Dostępny jest kanał zgłoszeń, zasady koordynacji, komunikacja z reporterami i klientami."],
  ["CRA-II-05", "Raportowanie aktywnie wykorzystywanych podatności i poważnych incydentów", "Proces wspiera terminy 24h/72h, final report oraz komunikację przez właściwe kanały CRA."]
];

const VIEW_FALLBACKS = {
  project: {
    title: "Projekt i SUC",
    description: "Zdefiniuj system podlegający rozważaniu, granice, punkty dostępu i kryteria ryzyka."
  },
  zones: {
    title: "Strefy i conduits",
    description: "Podziel SUC na strefy i połączenia oraz udokumentuj założenia separacji."
  },
  scenarios: {
    title: "Scenariusze ryzyka",
    description: "Oceń zagrożenia, podatności, wpływ, prawdopodobieństwo i ryzyko rezydualne."
  },
  "cra-components": {
    title: "Komponenty CRA",
    description: "Sklasyfikuj komponenty TCMS/PIS jako produkty z elementami cyfrowymi."
  },
  "cra-requirements": {
    title: "CRA Annex I",
    description: "Zmapuj wymagania CRA na komponenty, ryzyka, środki i dowody."
  },
  sbom: {
    title: "SBOM",
    description: "Zbierz składniki software, firmware, open-source i third-party."
  },
  vulnerabilities: {
    title: "Podatności",
    description: "Prowadź rejestr podatności, incydentów i obowiązków raportowania CRA."
  },
  traceability: {
    title: "Dowody",
    description: "Połącz ryzyka, wymagania, kontrole, testy i dowody."
  },
  requirements: {
    title: "Wymagania",
    description: "Udokumentuj wymagania cyberbezpieczeństwa, założenia, polityki i regulacje."
  },
  approval: {
    title: "Zatwierdzenie",
    description: "Zarejestruj decyzję właściciela aktywów i otwarte ryzyka."
  },
  report: {
    title: "Raport",
    description: "Sprawdź kompletność i wygeneruj raport DOC lub kopię JSON."
  }
};

let state = normaliseState(loadState());
let toastTimer = null;

document.addEventListener("DOMContentLoaded", init);

function init() {
  bindNavigation();
  bindLanguageSwitch();
  bindStaticFields();
  bindTopActions();
  bindForms();
  bindDynamicLists();
  renderAll();
  activateView("project");
}

function bindLanguageSwitch() {
  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.langSwitch);
    });
  });
  applyLanguage();
}

function setLanguage(language) {
  currentLanguage = language === "en" ? "en" : "pl";
  localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
  renderAll();
  const activeView = document.querySelector(".nav-button.active")?.dataset.view || "project";
  activateView(activeView);
  showToast(currentLanguage === "en" ? "Language changed to English." : "Zmieniono język na polski.");
}

function trText(value) {
  const source = String(value ?? "");
  if (currentLanguage !== "en") return source;
  return UI_TRANSLATIONS[source] || source;
}

function applyLanguage(root = document.body) {
  if (!root) return;
  document.documentElement.lang = currentLanguage;
  document.title = currentLanguage === "en"
    ? "CRA / IEC 62443-3-2 - risk analysis"
    : "CRA / IEC 62443-3-2 - analiza ryzyka";

  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    button.classList.toggle("active", button.dataset.langSwitch === currentLanguage);
  });

  translateTextNodes(root);
  translateAttributes(root);
}

function translateTextNodes(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const text = node.nodeValue;
      if (!text || !text.trim()) return NodeFilter.FILTER_REJECT;
      const parent = node.parentElement;
      if (!parent || parent.closest("script, style, textarea")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    if (!node.__i18nSource) node.__i18nSource = node.nodeValue;
    node.nodeValue = currentLanguage === "en" ? translateInlineText(node.__i18nSource) : node.__i18nSource;
  });
}

function translateAttributes(root) {
  const attributes = ["placeholder", "title", "aria-label", "data-title", "data-description"];
  const elements = [root, ...root.querySelectorAll("*")].filter((element) => element?.getAttribute);
  elements.forEach((element) => {
    attributes.forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      const sourceKey = `i18n${attribute.replace(/[^a-z]/gi, "")}Source`;
      if (!element.dataset[sourceKey]) element.dataset[sourceKey] = element.getAttribute(attribute);
      const source = element.dataset[sourceKey];
      element.setAttribute(attribute, currentLanguage === "en" ? translateInlineText(source) : source);
    });
  });
}

function translateInlineText(value) {
  let result = String(value ?? "");
  const trimmed = result.trim();
  const direct = UI_TRANSLATIONS[trimmed];
  if (direct) {
    return result.replace(trimmed, direct);
  }

  const entries = Object.entries(UI_TRANSLATIONS).sort((a, b) => b[0].length - a[0].length);
  entries.forEach(([pl, en]) => {
    if (pl && result.includes(pl)) {
      result = result.split(pl).join(en);
    }
  });
  return result;
}

function createDefaultState() {
  const today = new Date().toISOString().slice(0, 10);
  return {
    schemaVersion: 1,
    createdAt: new Date().toISOString(),
    updatedAt: "",
    meta: {
      title: "",
      organization: "",
      assetOwner: "",
      version: "0.1",
      analysisDate: today
    },
    method: {
      tolerableRisk: 9
    },
    suc: {
      description: "",
      perimeter: "",
      accessPoints: "",
      initialRiskSummary: ""
    },
    docs: {
      securityRequirements: "",
      drawings: "",
      characteristics: "",
      operatingAssumptions: "",
      threatEnvironment: "",
      policies: "",
      tolerableRisk: "",
      regulatory: ""
    },
    approval: {
      approver: "",
      approvalDate: "",
      decision: "Draft",
      nextReview: "",
      notes: ""
    },
    cra: {
      standardsApplied: "",
      secureUseInstructions: "",
      vulnerabilityPlan: "",
      declarationNotes: ""
    },
    zones: [],
    conduits: [],
    scenarios: [],
    components: [],
    sbom: [],
    vulnerabilities: [],
    traceability: [],
    craRequirements: CRA_REQUIREMENTS.map(([code, title, description]) => ({
      code,
      title,
      description,
      status: "not-started",
      componentId: "",
      evidence: ""
    })),
    checklist: ZCR_ITEMS.map(([code, title]) => ({
      code,
      title,
      status: "not-started",
      notes: ""
    }))
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    console.warn("Nie udało się wczytać stanu projektu.", error);
    return null;
  }
}

function normaliseState(saved) {
  const base = createDefaultState();
  const merged = mergeObjects(base, saved || {});

  const savedChecklist = Array.isArray(saved?.checklist) ? saved.checklist : [];
  merged.checklist = ZCR_ITEMS.map(([code, title]) => {
    const found = savedChecklist.find((item) => item.code === code) || {};
    return {
      code,
      title,
      status: found.status || "not-started",
      notes: found.notes || ""
    };
  });

  const savedCraRequirements = Array.isArray(saved?.craRequirements) ? saved.craRequirements : [];
  merged.craRequirements = CRA_REQUIREMENTS.map(([code, title, description]) => {
    const found = savedCraRequirements.find((item) => item.code === code) || {};
    return {
      code,
      title,
      description,
      status: found.status || "not-started",
      componentId: found.componentId || "",
      evidence: found.evidence || ""
    };
  });

  merged.zones = Array.isArray(merged.zones) ? merged.zones.map(normaliseZone) : [];
  merged.conduits = Array.isArray(merged.conduits) ? merged.conduits.map(normaliseConduit) : [];
  merged.scenarios = Array.isArray(merged.scenarios) ? merged.scenarios.map(normaliseScenario) : [];
  merged.components = Array.isArray(merged.components) ? merged.components.map(normaliseComponent) : [];
  merged.sbom = Array.isArray(merged.sbom) ? merged.sbom.map(normaliseSbomItem) : [];
  merged.vulnerabilities = Array.isArray(merged.vulnerabilities) ? merged.vulnerabilities.map(normaliseVulnerability) : [];
  merged.traceability = Array.isArray(merged.traceability) ? merged.traceability.map(normaliseTraceability) : [];
  merged.method.tolerableRisk = clampNumber(merged.method.tolerableRisk, 1, 25, 9);

  return merged;
}

function mergeObjects(base, saved) {
  if (!saved || typeof saved !== "object" || Array.isArray(saved)) {
    return clone(base);
  }

  const result = clone(base);
  for (const [key, value] of Object.entries(saved)) {
    if (value && typeof value === "object" && !Array.isArray(value) && result[key] && typeof result[key] === "object" && !Array.isArray(result[key])) {
      result[key] = mergeObjects(result[key], value);
    } else {
      result[key] = value;
    }
  }
  return result;
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function normaliseZone(zone) {
  const sl = {};
  FR_LEVELS.forEach((fr) => {
    sl[fr.key] = clampNumber(zone?.sl?.[fr.key] ?? zone?.slT ?? 0, 0, 4, 0);
  });
  return {
    id: zone?.id || createId(),
    name: zone?.name || "",
    type: zone?.type || "IACS",
    slT: String(clampNumber(zone?.slT, 0, 4, 0)),
    assets: zone?.assets || "",
    boundary: zone?.boundary || "",
    sl
  };
}

function normaliseConduit(conduit) {
  return {
    id: conduit?.id || createId(),
    name: conduit?.name || "",
    fromZone: conduit?.fromZone || "",
    toZone: conduit?.toZone || "",
    protocols: conduit?.protocols || "",
    controls: conduit?.controls || "",
    slT: String(clampNumber(conduit?.slT, 0, 4, 0))
  };
}

function normaliseScenario(scenario) {
  return {
    id: scenario?.id || createId(),
    target: scenario?.target || "suc",
    threat: scenario?.threat || "",
    vulnerability: scenario?.vulnerability || "",
    consequence: scenario?.consequence || "",
    impact: clampNumber(scenario?.impact, 1, 5, 3),
    likelihood: clampNumber(scenario?.likelihood, 1, 5, 3),
    slT: String(clampNumber(scenario?.slT, 0, 4, 0)),
    existingControls: scenario?.existingControls || "",
    residualImpact: clampNumber(scenario?.residualImpact, 1, 5, 2),
    residualLikelihood: clampNumber(scenario?.residualLikelihood, 1, 5, 2),
    additionalControls: scenario?.additionalControls || "",
    owner: scenario?.owner || "",
    dueDate: scenario?.dueDate || "",
    decision: scenario?.decision || "Mitigate"
  };
}

function normaliseComponent(component) {
  return {
    id: component?.id || createId(),
    name: component?.name || "",
    systemArea: component?.systemArea || "TCMS",
    componentType: component?.componentType || "Hardware",
    version: component?.version || "",
    supplier: component?.supplier || "",
    marketRole: component?.marketRole || "Manufacturer",
    craScope: component?.craScope || "In scope",
    supportEnd: component?.supportEnd || "",
    craCategory: component?.craCategory || "Default",
    conformity: component?.conformity || "Self-assessment",
    securityContact: component?.securityContact || "",
    intendedUse: component?.intendedUse || "",
    interfaces: component?.interfaces || "",
    classificationRationale: component?.classificationRationale || ""
  };
}

function normaliseSbomItem(item) {
  return {
    id: item?.id || createId(),
    componentId: item?.componentId || "",
    name: item?.name || "",
    version: item?.version || "",
    supplier: item?.supplier || "",
    license: item?.license || "",
    source: item?.source || "",
    cveStatus: item?.cveStatus || "Not checked",
    updateStatus: item?.updateStatus || "Current",
    notes: item?.notes || ""
  };
}

function normaliseVulnerability(item) {
  return {
    id: item?.id || createId(),
    componentId: item?.componentId || "",
    entryType: item?.entryType || "Vulnerability",
    reference: item?.reference || "",
    severity: item?.severity || "Medium",
    activelyExploited: item?.activelyExploited || "No",
    discoveredAt: item?.discoveredAt || "",
    patchStatus: item?.patchStatus || "Triage",
    reportingStatus: item?.reportingStatus || "Assess reportability",
    impact: item?.impact || "",
    mitigation: item?.mitigation || ""
  };
}

function normaliseTraceability(item) {
  return {
    id: item?.id || createId(),
    scenarioId: item?.scenarioId || "",
    componentId: item?.componentId || "",
    requirementCode: item?.requirementCode || "",
    control: item?.control || "",
    verification: item?.verification || "",
    result: item?.result || "Planned",
    owner: item?.owner || "",
    evidence: item?.evidence || ""
  };
}

function saveState() {
  state.updatedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  updateSaveStatus();
  updateCompletion();
}

function bindNavigation() {
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.addEventListener("click", () => activateView(button.dataset.view));
  });
}

function activateView(viewName) {
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewName);
  });
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("active", view.id === `view-${viewName}`);
  });

  const view = document.getElementById(`view-${viewName}`);
  const fallback = VIEW_FALLBACKS[viewName] || VIEW_FALLBACKS.project;
  document.getElementById("viewTitle").textContent = view?.dataset.title || fallback.title;
  document.getElementById("viewDescription").textContent = view?.dataset.description || fallback.description;
  applyLanguage();

  if (viewName === "report") {
    renderReport();
    applyLanguage();
  }
}

function bindStaticFields() {
  document.querySelectorAll("[data-bind]").forEach((field) => {
    const path = field.dataset.bind;
    setFieldValue(field, getPath(state, path));
    const applyChange = () => {
      setPath(state, path, getFieldValue(field));
      if (path === "method.tolerableRisk") {
        state.method.tolerableRisk = clampNumber(state.method.tolerableRisk, 1, 25, 9);
        renderRiskMatrix();
        renderScenarios();
      }
      saveState();
      renderReport();
    };
    field.addEventListener("input", applyChange);
    field.addEventListener("change", applyChange);
  });
}

function bindTopActions() {
  document.getElementById("newProjectButton").addEventListener("click", () => {
    const confirmed = window.confirm(trText("Utworzyć nowy pusty projekt? Bieżący stan w przeglądarce zostanie zastąpiony."));
    if (!confirmed) return;
    state = createDefaultState();
    saveState();
    renderAll();
    activateView("project");
    showToast("Utworzono nowy projekt.");
  });

  document.getElementById("importJsonButton").addEventListener("click", () => {
    document.getElementById("importJsonInput").click();
  });

  document.getElementById("importJsonInput").addEventListener("change", (event) => {
    const [file] = event.target.files;
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        state = normaliseState(JSON.parse(String(reader.result || "{}")));
        saveState();
        renderAll();
        activateView("project");
        showToast("Zaimportowano dane projektu.");
      } catch (error) {
        showToast("Nie udało się zaimportować JSON.");
        console.error(error);
      } finally {
        event.target.value = "";
      }
    };
    reader.readAsText(file, "utf-8");
  });

  document.getElementById("exportJsonButton").addEventListener("click", exportJson);
  document.getElementById("exportDocButton").addEventListener("click", exportDoc);
  document.getElementById("reportExportDocButton").addEventListener("click", exportDoc);
}

function bindForms() {
  document.getElementById("zoneForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    state.zones.push(normaliseZone(data));
    markChecklist("ZCR 3.1", "in-progress");
    event.currentTarget.reset();
    saveState();
    renderAll();
    showToast("Dodano strefę.");
  });

  document.getElementById("conduitForm").addEventListener("submit", (event) => {
    event.preventDefault();
    if (state.zones.length < 1) {
      showToast("Najpierw dodaj co najmniej jedną strefę.");
      return;
    }
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    state.conduits.push(normaliseConduit(data));
    markChecklist("ZCR 3.1", "in-progress");
    event.currentTarget.reset();
    saveState();
    renderAll();
    showToast("Dodano conduit.");
  });

  document.getElementById("scenarioForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    state.scenarios.push(normaliseScenario(data));
    markChecklist("ZCR 5.1", "in-progress");
    markChecklist("ZCR 5.5", "in-progress");
    event.currentTarget.reset();
    saveState();
    renderAll();
    showToast("Dodano scenariusz ryzyka.");
  });

  document.getElementById("componentForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    state.components.push(normaliseComponent(data));
    event.currentTarget.reset();
    saveState();
    renderAll();
    showToast("Dodano komponent CRA.");
  });

  document.getElementById("sbomForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    state.sbom.push(normaliseSbomItem(data));
    event.currentTarget.reset();
    saveState();
    renderAll();
    showToast("Dodano składnik SBOM.");
  });

  document.getElementById("vulnerabilityForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    state.vulnerabilities.push(normaliseVulnerability(data));
    event.currentTarget.reset();
    saveState();
    renderAll();
    showToast("Dodano wpis podatności/incydentu.");
  });

  document.getElementById("traceabilityForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    state.traceability.push(normaliseTraceability(data));
    event.currentTarget.reset();
    saveState();
    renderAll();
    showToast("Dodano dowód traceability.");
  });
}

function bindDynamicLists() {
  const zonesList = document.getElementById("zonesList");
  const handleZoneField = (event) => {
    const field = event.target.closest("[data-zone-field]");
    if (!field) return;
    const index = Number(field.closest("[data-index]").dataset.index);
    updateZoneField(index, field.dataset.zoneField, getFieldValue(field));
    saveState();
    if (event.type === "change") {
      renderZones();
      renderZoneOptions();
      renderConduits();
      renderScenarioTargets();
      renderScenarios();
    }
    renderReport();
  };
  zonesList.addEventListener("input", handleZoneField);
  zonesList.addEventListener("change", handleZoneField);
  zonesList.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-delete-zone]");
    if (!deleteButton) return;
    const index = Number(deleteButton.dataset.deleteZone);
    state.zones.splice(index, 1);
    saveState();
    renderAll();
    showToast("Usunięto strefę.");
  });

  const conduitsList = document.getElementById("conduitsList");
  const handleConduitField = (event) => {
    const field = event.target.closest("[data-conduit-field]");
    if (!field) return;
    const index = Number(field.closest("[data-index]").dataset.index);
    state.conduits[index][field.dataset.conduitField] = getFieldValue(field);
    saveState();
    if (event.type === "change") {
      renderConduits();
      renderScenarioTargets();
      renderScenarios();
    }
    renderReport();
  };
  conduitsList.addEventListener("input", handleConduitField);
  conduitsList.addEventListener("change", handleConduitField);
  conduitsList.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-delete-conduit]");
    if (!deleteButton) return;
    const index = Number(deleteButton.dataset.deleteConduit);
    state.conduits.splice(index, 1);
    saveState();
    renderAll();
    showToast("Usunięto conduit.");
  });

  const scenariosList = document.getElementById("scenariosList");
  const handleScenarioField = (event) => {
    const field = event.target.closest("[data-scenario-field]");
    if (!field) return;
    const index = Number(field.closest("[data-index]").dataset.index);
    updateScenarioField(index, field.dataset.scenarioField, getFieldValue(field));
    saveState();
    if (event.type === "change") {
      renderScenarios();
    } else {
      refreshScenarioMetrics(index);
    }
    renderReport();
  };
  scenariosList.addEventListener("input", handleScenarioField);
  scenariosList.addEventListener("change", handleScenarioField);
  scenariosList.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-delete-scenario]");
    if (!deleteButton) return;
    const index = Number(deleteButton.dataset.deleteScenario);
    state.scenarios.splice(index, 1);
    saveState();
    renderAll();
    showToast("Usunięto scenariusz.");
  });

  const checklistList = document.getElementById("checklistList");
  checklistList.addEventListener("input", handleChecklistUpdate);
  checklistList.addEventListener("change", handleChecklistUpdate);

  const componentsList = document.getElementById("componentsList");
  const handleComponentField = (event) => {
    const field = event.target.closest("[data-component-field]");
    if (!field) return;
    const index = Number(field.closest("[data-index]").dataset.index);
    state.components[index][field.dataset.componentField] = getFieldValue(field);
    saveState();
    if (event.type === "change") {
      renderAll();
    } else {
      renderReport();
    }
  };
  componentsList.addEventListener("input", handleComponentField);
  componentsList.addEventListener("change", handleComponentField);
  componentsList.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-delete-component]");
    if (!deleteButton) return;
    const index = Number(deleteButton.dataset.deleteComponent);
    state.components.splice(index, 1);
    saveState();
    renderAll();
    showToast("Usunięto komponent CRA.");
  });

  const craRequirementsList = document.getElementById("craRequirementsList");
  craRequirementsList.addEventListener("input", handleCraRequirementUpdate);
  craRequirementsList.addEventListener("change", handleCraRequirementUpdate);

  const sbomList = document.getElementById("sbomList");
  const handleSbomField = (event) => {
    const field = event.target.closest("[data-sbom-field]");
    if (!field) return;
    const index = Number(field.closest("[data-index]").dataset.index);
    state.sbom[index][field.dataset.sbomField] = getFieldValue(field);
    saveState();
    if (event.type === "change") {
      renderSbom();
    }
    renderReport();
  };
  sbomList.addEventListener("input", handleSbomField);
  sbomList.addEventListener("change", handleSbomField);
  sbomList.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-delete-sbom]");
    if (!deleteButton) return;
    const index = Number(deleteButton.dataset.deleteSbom);
    state.sbom.splice(index, 1);
    saveState();
    renderAll();
    showToast("Usunięto składnik SBOM.");
  });

  const vulnerabilitiesList = document.getElementById("vulnerabilitiesList");
  const handleVulnerabilityField = (event) => {
    const field = event.target.closest("[data-vulnerability-field]");
    if (!field) return;
    const index = Number(field.closest("[data-index]").dataset.index);
    state.vulnerabilities[index][field.dataset.vulnerabilityField] = getFieldValue(field);
    saveState();
    if (event.type === "change") {
      renderVulnerabilities();
    }
    renderReport();
  };
  vulnerabilitiesList.addEventListener("input", handleVulnerabilityField);
  vulnerabilitiesList.addEventListener("change", handleVulnerabilityField);
  vulnerabilitiesList.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-delete-vulnerability]");
    if (!deleteButton) return;
    const index = Number(deleteButton.dataset.deleteVulnerability);
    state.vulnerabilities.splice(index, 1);
    saveState();
    renderAll();
    showToast("Usunięto wpis podatności/incydentu.");
  });

  const traceabilityList = document.getElementById("traceabilityList");
  const handleTraceabilityField = (event) => {
    const field = event.target.closest("[data-traceability-field]");
    if (!field) return;
    const index = Number(field.closest("[data-index]").dataset.index);
    state.traceability[index][field.dataset.traceabilityField] = getFieldValue(field);
    saveState();
    if (event.type === "change") {
      renderTraceability();
    }
    renderReport();
  };
  traceabilityList.addEventListener("input", handleTraceabilityField);
  traceabilityList.addEventListener("change", handleTraceabilityField);
  traceabilityList.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-delete-traceability]");
    if (!deleteButton) return;
    const index = Number(deleteButton.dataset.deleteTraceability);
    state.traceability.splice(index, 1);
    saveState();
    renderAll();
    showToast("Usunięto dowód traceability.");
  });
}

function handleChecklistUpdate(event) {
  const field = event.target.closest("[data-check-field]");
  if (!field) return;
  const index = Number(field.closest("[data-index]").dataset.index);
  state.checklist[index][field.dataset.checkField] = getFieldValue(field);
  saveState();
  renderChecklistSummary();
  renderReport();
}

function handleCraRequirementUpdate(event) {
  const field = event.target.closest("[data-cra-req-field]");
  if (!field) return;
  const index = Number(field.closest("[data-index]").dataset.index);
  state.craRequirements[index][field.dataset.craReqField] = getFieldValue(field);
  saveState();
  renderCraRequirementSummary();
  if (event.type === "change") {
    renderTraceabilityOptions();
  }
  renderReport();
}

function updateZoneField(index, fieldName, value) {
  if (!state.zones[index]) return;
  if (fieldName.startsWith("sl.")) {
    const key = fieldName.slice(3);
    state.zones[index].sl[key] = clampNumber(value, 0, 4, 0);
    return;
  }
  state.zones[index][fieldName] = value;
}

function updateScenarioField(index, fieldName, value) {
  if (!state.scenarios[index]) return;
  if (["impact", "likelihood", "residualImpact", "residualLikelihood"].includes(fieldName)) {
    state.scenarios[index][fieldName] = clampNumber(value, 1, 5, 1);
    return;
  }
  state.scenarios[index][fieldName] = value;
}

function renderAll() {
  syncBoundFields();
  renderRiskMatrix();
  renderZoneOptions();
  renderZones();
  renderConduits();
  renderScenarioTargets();
  renderScenarios();
  renderCraComponentOptions();
  renderComponents();
  renderCraRequirements();
  renderSbom();
  renderVulnerabilities();
  renderTraceabilityOptions();
  renderTraceability();
  renderChecklist();
  renderApprovalSummary();
  renderReport();
  updateSaveStatus();
  updateCompletion();
  applyLanguage();
}

function syncBoundFields() {
  document.querySelectorAll("[data-bind]").forEach((field) => {
    setFieldValue(field, getPath(state, field.dataset.bind));
  });
}

function renderRiskMatrix() {
  const container = document.getElementById("riskMatrix");
  const tolerable = Number(state.method.tolerableRisk || 9);
  let html = "<table><thead><tr><th>Prawd. \\ Wpływ</th>";
  for (let impact = 1; impact <= 5; impact += 1) {
    html += `<th>${impact}</th>`;
  }
  html += "</tr></thead><tbody>";
  for (let likelihood = 5; likelihood >= 1; likelihood -= 1) {
    html += `<tr><th>${likelihood}</th>`;
    for (let impact = 1; impact <= 5; impact += 1) {
      const score = impact * likelihood;
      const status = riskStatus(score);
      const acceptable = score <= tolerable ? "w progu" : "ponad próg";
      html += `<td class="risk-cell ${status.className}">${score}<br><small>${status.label}, ${acceptable}</small></td>`;
    }
    html += "</tr>";
  }
  html += "</tbody></table>";
  container.innerHTML = html;
}

function renderZoneOptions() {
  const from = document.getElementById("fromZoneSelect");
  const to = document.getElementById("toZoneSelect");
  const options = state.zones.length
    ? state.zones.map((zone) => `<option value="${escapeAttr(zone.id)}">${escapeHtml(zone.name || "Strefa bez nazwy")}</option>`).join("")
    : '<option value="">Najpierw dodaj strefę</option>';
  from.innerHTML = options;
  to.innerHTML = options;
  from.disabled = state.zones.length === 0;
  to.disabled = state.zones.length === 0;
}

function renderZones() {
  const list = document.getElementById("zonesList");
  document.getElementById("zoneCount").textContent = String(state.zones.length);
  if (!state.zones.length) {
    list.innerHTML = '<div class="empty-state">Brak stref. Dodaj pierwszą strefę, aby rozpocząć podział SUC.</div>';
    return;
  }
  list.innerHTML = state.zones.map((zone, index) => zoneCard(zone, index)).join("");
}

function zoneCard(zone, index) {
  const slControls = FR_LEVELS.map((fr) => `
    <label title="${escapeAttr(fr.title)}">
      <span>${fr.label}</span>
      <select data-zone-field="sl.${fr.key}">
        ${slOptions(zone.sl?.[fr.key])}
      </select>
    </label>
  `).join("");

  return `
    <article class="record-card" data-index="${index}">
      <div class="record-header">
        <div class="record-title">
          <h4>${escapeHtml(zone.name || "Strefa bez nazwy")}</h4>
          <p>${escapeHtml(zone.type)} · SL-T ${escapeHtml(zone.slT || "0")}</p>
        </div>
        <div class="record-actions">
          <button class="danger-button" type="button" data-delete-zone="${index}">Usuń</button>
        </div>
      </div>
      <div class="record-body">
        <div class="form-grid three">
          <label class="field">
            <span>Nazwa</span>
            <input type="text" data-zone-field="name" value="${escapeAttr(zone.name)}">
          </label>
          <label class="field">
            <span>Typ</span>
            <select data-zone-field="type">${typeOptions(zone.type)}</select>
          </label>
          <label class="field">
            <span>SL-T ogólny</span>
            <select data-zone-field="slT">${slOptions(zone.slT)}</select>
          </label>
        </div>
        <div class="form-grid two">
          <label class="field">
            <span>Aktywa</span>
            <textarea data-zone-field="assets" rows="4">${escapeHtml(zone.assets)}</textarea>
          </label>
          <label class="field">
            <span>Granice i separacja</span>
            <textarea data-zone-field="boundary" rows="4">${escapeHtml(zone.boundary)}</textarea>
          </label>
        </div>
        <div class="sl-grid">${slControls}</div>
      </div>
    </article>
  `;
}

function renderConduits() {
  const list = document.getElementById("conduitsList");
  document.getElementById("conduitCount").textContent = String(state.conduits.length);
  if (!state.conduits.length) {
    list.innerHTML = '<div class="empty-state">Brak conduits. Dodaj połączenia między strefami, przepływy i zabezpieczenia.</div>';
    return;
  }
  list.innerHTML = state.conduits.map((conduit, index) => conduitCard(conduit, index)).join("");
}

function conduitCard(conduit, index) {
  return `
    <article class="record-card" data-index="${index}">
      <div class="record-header">
        <div class="record-title">
          <h4>${escapeHtml(conduit.name || "Conduit bez nazwy")}</h4>
          <p>${escapeHtml(zoneLabel(conduit.fromZone))} -> ${escapeHtml(zoneLabel(conduit.toZone))}</p>
        </div>
        <div class="record-actions">
          <button class="danger-button" type="button" data-delete-conduit="${index}">Usuń</button>
        </div>
      </div>
      <div class="record-body">
        <div class="form-grid three">
          <label class="field">
            <span>Nazwa</span>
            <input type="text" data-conduit-field="name" value="${escapeAttr(conduit.name)}">
          </label>
          <label class="field">
            <span>Ze strefy</span>
            <select data-conduit-field="fromZone">${zoneSelectOptions(conduit.fromZone)}</select>
          </label>
          <label class="field">
            <span>Do strefy</span>
            <select data-conduit-field="toZone">${zoneSelectOptions(conduit.toZone)}</select>
          </label>
        </div>
        <div class="form-grid three">
          <label class="field">
            <span>SL-T</span>
            <select data-conduit-field="slT">${slOptions(conduit.slT)}</select>
          </label>
          <label class="field">
            <span>Protokoły / przepływy</span>
            <textarea data-conduit-field="protocols" rows="4">${escapeHtml(conduit.protocols)}</textarea>
          </label>
          <label class="field">
            <span>Środki ochronne</span>
            <textarea data-conduit-field="controls" rows="4">${escapeHtml(conduit.controls)}</textarea>
          </label>
        </div>
      </div>
    </article>
  `;
}

function renderScenarioTargets() {
  const select = document.getElementById("scenarioTargetSelect");
  select.innerHTML = scenarioTargetOptions();
}

function renderScenarios() {
  const list = document.getElementById("scenariosList");
  document.getElementById("scenarioCount").textContent = String(state.scenarios.length);
  if (!state.scenarios.length) {
    list.innerHTML = '<div class="empty-state">Brak scenariuszy. Dodaj zagrożenie, podatność, konsekwencję i ocenę ryzyka.</div>';
    return;
  }
  list.innerHTML = state.scenarios.map((scenario, index) => scenarioCard(scenario, index)).join("");
}

function scenarioCard(scenario, index) {
  const unmitigated = scoreScenario(scenario, false);
  const residual = scoreScenario(scenario, true);
  const residualStatus = riskStatus(residual);
  const thresholdLabel = residual <= Number(state.method.tolerableRisk || 9) ? "w progu tolerancji" : "wymaga decyzji";

  return `
    <article class="record-card" data-index="${index}" id="scenario-${index}">
      <div class="record-header">
        <div class="record-title">
          <h4>${escapeHtml(scenario.threat || "Scenariusz bez nazwy")}</h4>
          <p>${escapeHtml(targetLabel(scenario.target))}</p>
        </div>
        <div class="record-actions">
          <span class="risk-badge ${residualStatus.className}" data-risk-badge>${residualStatus.label}: ${residual}</span>
          <button class="danger-button" type="button" data-delete-scenario="${index}">Usuń</button>
        </div>
      </div>
      <div class="record-body">
        <div class="scenario-metrics" data-scenario-metrics>
          ${scenarioMetricHtml("Ryzyko bez mitygacji", unmitigated, riskStatus(unmitigated).label)}
          ${scenarioMetricHtml("Ryzyko rezydualne", residual, residualStatus.label)}
          ${scenarioMetricHtml("Próg tolerowany", state.method.tolerableRisk, thresholdLabel)}
          ${scenarioMetricHtml("SL-T", scenario.slT || "0", "docelowo")}
        </div>
        <div class="form-grid three">
          <label class="field">
            <span>Obszar</span>
            <select data-scenario-field="target">${scenarioTargetOptions(scenario.target)}</select>
          </label>
          <label class="field">
            <span>Zagrożenie</span>
            <input type="text" data-scenario-field="threat" value="${escapeAttr(scenario.threat)}">
          </label>
          <label class="field">
            <span>SL-T</span>
            <select data-scenario-field="slT">${slOptions(scenario.slT)}</select>
          </label>
        </div>
        <div class="form-grid two">
          <label class="field">
            <span>Podatność</span>
            <textarea data-scenario-field="vulnerability" rows="4">${escapeHtml(scenario.vulnerability)}</textarea>
          </label>
          <label class="field">
            <span>Konsekwencja</span>
            <textarea data-scenario-field="consequence" rows="4">${escapeHtml(scenario.consequence)}</textarea>
          </label>
        </div>
        <div class="rating-row">
          <label class="field">
            <span>Wpływ przed</span>
            <input type="number" min="1" max="5" data-scenario-field="impact" value="${escapeAttr(scenario.impact)}">
          </label>
          <label class="field">
            <span>Prawdop. przed</span>
            <input type="number" min="1" max="5" data-scenario-field="likelihood" value="${escapeAttr(scenario.likelihood)}">
          </label>
          <label class="field">
            <span>Wpływ po</span>
            <input type="number" min="1" max="5" data-scenario-field="residualImpact" value="${escapeAttr(scenario.residualImpact)}">
          </label>
          <label class="field">
            <span>Prawdop. po</span>
            <input type="number" min="1" max="5" data-scenario-field="residualLikelihood" value="${escapeAttr(scenario.residualLikelihood)}">
          </label>
        </div>
        <div class="form-grid two">
          <label class="field">
            <span>Istniejące zabezpieczenia</span>
            <textarea data-scenario-field="existingControls" rows="4">${escapeHtml(scenario.existingControls)}</textarea>
          </label>
          <label class="field">
            <span>Dodatkowe środki / wymagania</span>
            <textarea data-scenario-field="additionalControls" rows="4">${escapeHtml(scenario.additionalControls)}</textarea>
          </label>
        </div>
        <div class="form-grid three">
          <label class="field">
            <span>Właściciel</span>
            <input type="text" data-scenario-field="owner" value="${escapeAttr(scenario.owner)}">
          </label>
          <label class="field">
            <span>Termin</span>
            <input type="date" data-scenario-field="dueDate" value="${escapeAttr(scenario.dueDate)}">
          </label>
          <label class="field">
            <span>Decyzja</span>
            <select data-scenario-field="decision">${decisionOptions(scenario.decision)}</select>
          </label>
        </div>
      </div>
    </article>
  `;
}

function refreshScenarioMetrics(index) {
  const card = document.getElementById(`scenario-${index}`);
  const scenario = state.scenarios[index];
  if (!card || !scenario) return;
  const unmitigated = scoreScenario(scenario, false);
  const residual = scoreScenario(scenario, true);
  const residualStatus = riskStatus(residual);
  const thresholdLabel = residual <= Number(state.method.tolerableRisk || 9) ? "w progu tolerancji" : "wymaga decyzji";
  const metrics = card.querySelector("[data-scenario-metrics]");
  const badge = card.querySelector("[data-risk-badge]");
  metrics.innerHTML = [
    scenarioMetricHtml("Ryzyko bez mitygacji", unmitigated, riskStatus(unmitigated).label),
    scenarioMetricHtml("Ryzyko rezydualne", residual, residualStatus.label),
    scenarioMetricHtml("Próg tolerowany", state.method.tolerableRisk, thresholdLabel),
    scenarioMetricHtml("SL-T", scenario.slT || "0", "docelowo")
  ].join("");
  badge.className = `risk-badge ${residualStatus.className}`;
  badge.textContent = `${residualStatus.label}: ${residual}`;
}

function scenarioMetricHtml(label, value, hint) {
  return `
    <div class="metric">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
      <span>${escapeHtml(hint)}</span>
    </div>
  `;
}

function renderCraComponentOptions() {
  [
    "sbomComponentSelect",
    "vulnerabilityComponentSelect",
    "traceComponentSelect"
  ].forEach((id) => {
    const select = document.getElementById(id);
    if (select) select.innerHTML = componentSelectOptions();
  });
}

function renderComponents() {
  const list = document.getElementById("componentsList");
  document.getElementById("componentCount").textContent = String(state.components.length);
  if (!state.components.length) {
    list.innerHTML = '<div class="empty-state">Brak komponentów CRA. Dodaj elementy TCMS, PIS, sieci pokładowej, remote service i narzędzia utrzymania.</div>';
    return;
  }
  list.innerHTML = state.components.map((component, index) => componentCard(component, index)).join("");
}

function componentCard(component, index) {
  return `
    <article class="record-card" data-index="${index}">
      <div class="record-header">
        <div class="record-title">
          <h4>${escapeHtml(component.name || "Komponent bez nazwy")}</h4>
          <p>${escapeHtml(component.systemArea)} · ${escapeHtml(component.componentType)} · ${escapeHtml(component.craCategory)}</p>
        </div>
        <div class="record-actions">
          <span class="status-badge">${escapeHtml(component.craScope)}</span>
          <button class="danger-button" type="button" data-delete-component="${index}">Usuń</button>
        </div>
      </div>
      <div class="record-body">
        <div class="form-grid four">
          <label class="field">
            <span>Nazwa</span>
            <input type="text" data-component-field="name" value="${escapeAttr(component.name)}">
          </label>
          <label class="field">
            <span>Obszar</span>
            <select data-component-field="systemArea">${systemAreaOptions(component.systemArea)}</select>
          </label>
          <label class="field">
            <span>Typ</span>
            <select data-component-field="componentType">${componentTypeOptions(component.componentType)}</select>
          </label>
          <label class="field">
            <span>Wersja / wariant</span>
            <input type="text" data-component-field="version" value="${escapeAttr(component.version)}">
          </label>
        </div>
        <div class="form-grid four">
          <label class="field">
            <span>Dostawca</span>
            <input type="text" data-component-field="supplier" value="${escapeAttr(component.supplier)}">
          </label>
          <label class="field">
            <span>Rola CRA</span>
            <select data-component-field="marketRole">${marketRoleOptions(component.marketRole)}</select>
          </label>
          <label class="field">
            <span>Zakres CRA</span>
            <select data-component-field="craScope">${craScopeOptions(component.craScope)}</select>
          </label>
          <label class="field">
            <span>Support period do</span>
            <input type="month" data-component-field="supportEnd" value="${escapeAttr(component.supportEnd)}">
          </label>
        </div>
        <div class="form-grid three">
          <label class="field">
            <span>Kategoria CRA</span>
            <select data-component-field="craCategory">${craCategoryOptions(component.craCategory)}</select>
          </label>
          <label class="field">
            <span>Ocena zgodności</span>
            <select data-component-field="conformity">${conformityOptions(component.conformity)}</select>
          </label>
          <label class="field">
            <span>Kontakt bezpieczeństwa</span>
            <input type="text" data-component-field="securityContact" value="${escapeAttr(component.securityContact)}">
          </label>
        </div>
        <div class="form-grid three">
          <label class="field">
            <span>Zastosowanie i funkcje</span>
            <textarea data-component-field="intendedUse" rows="4">${escapeHtml(component.intendedUse)}</textarea>
          </label>
          <label class="field">
            <span>Interfejsy i połączenia</span>
            <textarea data-component-field="interfaces" rows="4">${escapeHtml(component.interfaces)}</textarea>
          </label>
          <label class="field">
            <span>Uzasadnienie klasyfikacji</span>
            <textarea data-component-field="classificationRationale" rows="4">${escapeHtml(component.classificationRationale)}</textarea>
          </label>
        </div>
      </div>
    </article>
  `;
}

function renderCraRequirements() {
  const list = document.getElementById("craRequirementsList");
  list.innerHTML = state.craRequirements.map((item, index) => `
    <div class="checklist-row cra-row" data-index="${index}">
      <div class="checklist-code">${escapeHtml(item.code)}</div>
      <div>
        <div class="checklist-title">${escapeHtml(trText(item.title))}</div>
        <div class="record-title"><p>${escapeHtml(trText(item.description))}</p></div>
      </div>
      <select data-cra-req-field="status">${statusOptions(item.status)}</select>
      <select data-cra-req-field="componentId">${componentSelectOptions(item.componentId, "Wszystkie / ogólne")}</select>
      <input type="text" data-cra-req-field="evidence" value="${escapeAttr(item.evidence)}" placeholder="dowód / dokument / test">
    </div>
  `).join("");
  renderCraRequirementSummary();
}

function renderCraRequirementSummary() {
  const completed = state.craRequirements.filter((item) => item.status === "done" || item.status === "na").length;
  document.getElementById("craRequirementCount").textContent = `${completed}/${state.craRequirements.length}`;
}

function renderSbom() {
  const list = document.getElementById("sbomList");
  document.getElementById("sbomCount").textContent = String(state.sbom.length);
  if (!state.sbom.length) {
    list.innerHTML = '<div class="empty-state">Brak wpisów SBOM. Dodaj biblioteki, OS, firmware, pakiety i komponenty third-party.</div>';
    return;
  }
  list.innerHTML = state.sbom.map((item, index) => sbomCard(item, index)).join("");
}

function sbomCard(item, index) {
  return `
    <article class="record-card" data-index="${index}">
      <div class="record-header">
        <div class="record-title">
          <h4>${escapeHtml(item.name || "Składnik bez nazwy")}</h4>
          <p>${escapeHtml(componentLabel(item.componentId))} · ${escapeHtml(item.version || "brak wersji")}</p>
        </div>
        <div class="record-actions">
          <span class="status-badge">${escapeHtml(item.cveStatus)}</span>
          <button class="danger-button" type="button" data-delete-sbom="${index}">Usuń</button>
        </div>
      </div>
      <div class="record-body">
        <div class="form-grid four">
          <label class="field">
            <span>Komponent produktu</span>
            <select data-sbom-field="componentId">${componentSelectOptions(item.componentId)}</select>
          </label>
          <label class="field">
            <span>Nazwa</span>
            <input type="text" data-sbom-field="name" value="${escapeAttr(item.name)}">
          </label>
          <label class="field">
            <span>Wersja</span>
            <input type="text" data-sbom-field="version" value="${escapeAttr(item.version)}">
          </label>
          <label class="field">
            <span>Dostawca</span>
            <input type="text" data-sbom-field="supplier" value="${escapeAttr(item.supplier)}">
          </label>
        </div>
        <div class="form-grid four">
          <label class="field">
            <span>Licencja</span>
            <input type="text" data-sbom-field="license" value="${escapeAttr(item.license)}">
          </label>
          <label class="field">
            <span>Źródło</span>
            <input type="text" data-sbom-field="source" value="${escapeAttr(item.source)}">
          </label>
          <label class="field">
            <span>Status CVE</span>
            <select data-sbom-field="cveStatus">${cveStatusOptions(item.cveStatus)}</select>
          </label>
          <label class="field">
            <span>Status aktualizacji</span>
            <select data-sbom-field="updateStatus">${updateStatusOptions(item.updateStatus)}</select>
          </label>
        </div>
        <label class="field">
          <span>Notatki / uzasadnienie</span>
          <textarea data-sbom-field="notes" rows="3">${escapeHtml(item.notes)}</textarea>
        </label>
      </div>
    </article>
  `;
}

function renderVulnerabilities() {
  const list = document.getElementById("vulnerabilitiesList");
  document.getElementById("vulnerabilityCount").textContent = String(state.vulnerabilities.length);
  if (!state.vulnerabilities.length) {
    list.innerHTML = '<div class="empty-state">Brak podatności i incydentów. Dodaj CVE, advisory, incydent albo near miss powiązany z komponentem.</div>';
    return;
  }
  list.innerHTML = state.vulnerabilities.map((item, index) => vulnerabilityCard(item, index)).join("");
}

function vulnerabilityCard(item, index) {
  return `
    <article class="record-card" data-index="${index}">
      <div class="record-header">
        <div class="record-title">
          <h4>${escapeHtml(item.reference || item.entryType || "Wpis bez ID")}</h4>
          <p>${escapeHtml(componentLabel(item.componentId))} · ${escapeHtml(item.entryType)} · ${escapeHtml(reportingDueText(item))}</p>
        </div>
        <div class="record-actions">
          <span class="risk-badge ${severityClass(item.severity)}">${escapeHtml(item.severity)}</span>
          <button class="danger-button" type="button" data-delete-vulnerability="${index}">Usuń</button>
        </div>
      </div>
      <div class="record-body">
        <div class="form-grid four">
          <label class="field">
            <span>Komponent</span>
            <select data-vulnerability-field="componentId">${componentSelectOptions(item.componentId)}</select>
          </label>
          <label class="field">
            <span>Typ wpisu</span>
            <select data-vulnerability-field="entryType">${entryTypeOptions(item.entryType)}</select>
          </label>
          <label class="field">
            <span>ID / źródło</span>
            <input type="text" data-vulnerability-field="reference" value="${escapeAttr(item.reference)}">
          </label>
          <label class="field">
            <span>Severity</span>
            <select data-vulnerability-field="severity">${severityOptions(item.severity)}</select>
          </label>
        </div>
        <div class="form-grid four">
          <label class="field">
            <span>Aktywnie wykorzystywana</span>
            <select data-vulnerability-field="activelyExploited">${activelyExploitedOptions(item.activelyExploited)}</select>
          </label>
          <label class="field">
            <span>Data wykrycia</span>
            <input type="datetime-local" data-vulnerability-field="discoveredAt" value="${escapeAttr(item.discoveredAt)}">
          </label>
          <label class="field">
            <span>Status poprawki</span>
            <select data-vulnerability-field="patchStatus">${patchStatusOptions(item.patchStatus)}</select>
          </label>
          <label class="field">
            <span>Status raportowania</span>
            <select data-vulnerability-field="reportingStatus">${reportingStatusOptions(item.reportingStatus)}</select>
          </label>
        </div>
        <div class="form-grid two">
          <label class="field">
            <span>Opis wpływu</span>
            <textarea data-vulnerability-field="impact" rows="4">${escapeHtml(item.impact)}</textarea>
          </label>
          <label class="field">
            <span>Mitigacja / komunikacja</span>
            <textarea data-vulnerability-field="mitigation" rows="4">${escapeHtml(item.mitigation)}</textarea>
          </label>
        </div>
      </div>
    </article>
  `;
}

function renderTraceabilityOptions() {
  const scenarioSelect = document.getElementById("traceScenarioSelect");
  const componentSelect = document.getElementById("traceComponentSelect");
  const requirementSelect = document.getElementById("traceRequirementSelect");
  if (scenarioSelect) scenarioSelect.innerHTML = scenarioSelectOptions();
  if (componentSelect) componentSelect.innerHTML = componentSelectOptions();
  if (requirementSelect) requirementSelect.innerHTML = requirementSelectOptions();
}

function renderTraceability() {
  const list = document.getElementById("traceabilityList");
  document.getElementById("traceabilityCount").textContent = String(state.traceability.length);
  if (!state.traceability.length) {
    list.innerHTML = '<div class="empty-state">Brak dowodów. Dodaj powiązania między ryzykiem, komponentem, wymaganiem, kontrolą i testem.</div>';
    return;
  }
  list.innerHTML = state.traceability.map((item, index) => traceabilityCard(item, index)).join("");
}

function traceabilityCard(item, index) {
  return `
    <article class="record-card" data-index="${index}">
      <div class="record-header">
        <div class="record-title">
          <h4>${escapeHtml(item.requirementCode || "Wymaganie bez kodu")}</h4>
          <p>${escapeHtml(componentLabel(item.componentId))} · ${escapeHtml(scenarioLabel(item.scenarioId))}</p>
        </div>
        <div class="record-actions">
          <span class="status-badge">${escapeHtml(item.result)}</span>
          <button class="danger-button" type="button" data-delete-traceability="${index}">Usuń</button>
        </div>
      </div>
      <div class="record-body">
        <div class="form-grid three">
          <label class="field">
            <span>Scenariusz ryzyka</span>
            <select data-traceability-field="scenarioId">${scenarioSelectOptions(item.scenarioId)}</select>
          </label>
          <label class="field">
            <span>Komponent</span>
            <select data-traceability-field="componentId">${componentSelectOptions(item.componentId)}</select>
          </label>
          <label class="field">
            <span>Wymaganie</span>
            <select data-traceability-field="requirementCode">${requirementSelectOptions(item.requirementCode)}</select>
          </label>
        </div>
        <div class="form-grid two">
          <label class="field">
            <span>Kontrola / wymaganie projektowe</span>
            <textarea data-traceability-field="control" rows="4">${escapeHtml(item.control)}</textarea>
          </label>
          <label class="field">
            <span>Test / weryfikacja</span>
            <textarea data-traceability-field="verification" rows="4">${escapeHtml(item.verification)}</textarea>
          </label>
        </div>
        <div class="form-grid three">
          <label class="field">
            <span>Wynik</span>
            <select data-traceability-field="result">${traceResultOptions(item.result)}</select>
          </label>
          <label class="field">
            <span>Właściciel</span>
            <input type="text" data-traceability-field="owner" value="${escapeAttr(item.owner)}">
          </label>
          <label class="field">
            <span>Dowód / referencja</span>
            <input type="text" data-traceability-field="evidence" value="${escapeAttr(item.evidence)}">
          </label>
        </div>
      </div>
    </article>
  `;
}

function renderChecklist() {
  const list = document.getElementById("checklistList");
  list.innerHTML = state.checklist.map((item, index) => `
    <div class="checklist-row" data-index="${index}">
      <div class="checklist-code">${escapeHtml(item.code)}</div>
      <div class="checklist-title">${escapeHtml(item.title)}</div>
      <select data-check-field="status">${statusOptions(item.status)}</select>
      <input type="text" data-check-field="notes" value="${escapeAttr(item.notes)}" placeholder="notatka / dowód">
    </div>
  `).join("");
  renderChecklistSummary();
}

function renderChecklistSummary() {
  const completed = state.checklist.filter((item) => item.status === "done" || item.status === "na").length;
  document.getElementById("checklistCount").textContent = `${completed}/${state.checklist.length}`;
}

function renderApprovalSummary() {
  const container = document.getElementById("approvalSummary");
  const aboveThreshold = state.scenarios.filter((scenario) => scoreScenario(scenario, true) > Number(state.method.tolerableRisk || 9)).length;
  const actions = state.scenarios.filter((scenario) => (scenario.additionalControls || "").trim()).length;
  const accepted = state.scenarios.filter((scenario) => scenario.decision === "Accept").length;
  container.innerHTML = [
    scenarioMetricHtml("Scenariusze", state.scenarios.length, "łącznie"),
    scenarioMetricHtml("Ponad próg", aboveThreshold, "ryzyko rezydualne"),
    scenarioMetricHtml("Działania", actions, "zdefiniowane"),
    scenarioMetricHtml("Akceptacje", accepted, "decyzja Accept")
  ].join("");
}

function renderReport() {
  renderApprovalSummary();
  const metrics = document.getElementById("reportMetrics");
  const preview = document.getElementById("reportPreview");
  if (!metrics || !preview) return;

  const aboveThreshold = state.scenarios.filter((scenario) => scoreScenario(scenario, true) > Number(state.method.tolerableRisk || 9)).length;
  const checklistDone = state.checklist.filter((item) => item.status === "done" || item.status === "na").length;
  const craDone = state.craRequirements.filter((item) => item.status === "done" || item.status === "na").length;
  const reportableItems = state.vulnerabilities.filter((item) => item.reportingStatus !== "Not reportable").length;
  metrics.innerHTML = [
    scenarioMetricHtml("Strefy", state.zones.length, "ZCR 3"),
    scenarioMetricHtml("Conduits", state.conduits.length, "ZCR 3"),
    scenarioMetricHtml("Scenariusze", state.scenarios.length, "ZCR 5"),
    scenarioMetricHtml("Komponenty CRA", state.components.length, "TCMS/PIS"),
    scenarioMetricHtml("SBOM", state.sbom.length, "składniki"),
    scenarioMetricHtml("Podatności", state.vulnerabilities.length, reportableItems ? `${reportableItems} do oceny raportowania` : "brak raportowalnych"),
    scenarioMetricHtml("ZCR gotowe", `${checklistDone}/${state.checklist.length}`, aboveThreshold ? `${aboveThreshold} ryzyk ponad próg` : "brak przekroczeń"),
    scenarioMetricHtml("CRA gotowe", `${craDone}/${state.craRequirements.length}`, "Annex I")
  ].join("");

  preview.innerHTML = `
    <section class="preview-section">
      <h4>${escapeHtml(reportTitle())}</h4>
      <p><strong>Organizacja:</strong> ${dash(state.meta.organization)}</p>
      <p><strong>Właściciel aktywów:</strong> ${dash(state.meta.assetOwner)}</p>
      <p><strong>Wersja:</strong> ${dash(state.meta.version)} · <strong>Data:</strong> ${dash(state.meta.analysisDate)}</p>
    </section>
    <section class="preview-section">
      <h4>Zakres SUC</h4>
      <p>${nl2br(state.suc.description || "Brak opisu SUC.")}</p>
      <p><strong>Granica:</strong> ${nl2br(state.suc.perimeter || "Brak opisu granicy.")}</p>
    </section>
    <section class="preview-section">
      <h4>Najwyższe ryzyka rezydualne</h4>
      ${topRisksPreview()}
    </section>
    <section class="preview-section">
      <h4>CRA: komponenty i luki</h4>
      ${craGapsPreview()}
    </section>
  `;
  applyLanguage();
}

function topRisksPreview() {
  if (!state.scenarios.length) {
    return "<p>Brak scenariuszy ryzyka.</p>";
  }
  const sorted = [...state.scenarios]
    .sort((a, b) => scoreScenario(b, true) - scoreScenario(a, true))
    .slice(0, 5);
  return `
    <table class="report-table">
      <thead>
        <tr><th>Scenariusz</th><th>Obszar</th><th>Ryzyko rezydualne</th><th>Decyzja</th></tr>
      </thead>
      <tbody>
        ${sorted.map((scenario) => {
          const score = scoreScenario(scenario, true);
          return `<tr><td>${escapeHtml(scenario.threat || "-")}</td><td>${escapeHtml(targetLabel(scenario.target))}</td><td>${score} (${riskStatus(score).label})</td><td>${escapeHtml(scenario.decision)}</td></tr>`;
        }).join("")}
      </tbody>
    </table>
  `;
}

function craGapsPreview() {
  const componentsToAssess = state.components.filter((component) => component.craCategory === "To be assessed" || component.conformity === "To be assessed" || component.craScope === "Needs legal assessment");
  const requirementsOpen = state.craRequirements.filter((item) => item.status === "not-started" || item.status === "in-progress").slice(0, 6);
  const patchRequired = state.sbom.filter((item) => item.cveStatus === "Patch required" || item.updateStatus === "End of support");
  const reportingOpen = state.vulnerabilities.filter((item) => item.reportingStatus !== "Not reportable" && item.reportingStatus !== "Reported");

  return `
    <table class="report-table">
      <tbody>
        <tr><th>Komponenty do oceny</th><td>${componentsToAssess.length ? escapeHtml(componentsToAssess.map((item) => item.name || "bez nazwy").join(", ")) : "Brak"}</td></tr>
        <tr><th>Otwarte wymagania CRA</th><td>${requirementsOpen.length ? escapeHtml(requirementsOpen.map((item) => item.code).join(", ")) : "Brak"}</td></tr>
        <tr><th>SBOM wymagający reakcji</th><td>${patchRequired.length ? escapeHtml(patchRequired.map((item) => item.name || "bez nazwy").join(", ")) : "Brak"}</td></tr>
        <tr><th>Raportowanie do oceny</th><td>${reportingOpen.length ? escapeHtml(reportingOpen.map((item) => item.reference || item.entryType).join(", ")) : "Brak"}</td></tr>
      </tbody>
    </table>
  `;
}

function updateCompletion() {
  const required = [
    state.meta.title,
    state.meta.organization,
    state.meta.assetOwner,
    state.suc.description,
    state.suc.perimeter,
    state.suc.accessPoints,
    state.suc.initialRiskSummary,
    state.zones.length,
    state.conduits.length,
    state.scenarios.length,
    state.docs.securityRequirements,
    state.docs.operatingAssumptions,
    state.docs.threatEnvironment,
    state.docs.tolerableRisk,
    state.docs.regulatory,
    state.components.length,
    state.sbom.length,
    state.traceability.length,
    state.cra.standardsApplied,
    state.cra.secureUseInstructions,
    state.cra.vulnerabilityPlan,
    state.approval.approver,
    state.approval.decision !== "Draft" ? state.approval.decision : ""
  ];
  const filled = required.filter(isFilled).length;
  const zcrDone = state.checklist.filter((item) => item.status === "done" || item.status === "na").length;
  const craDone = state.craRequirements.filter((item) => item.status === "done" || item.status === "na").length;
  const checklistScore = (zcrDone + craDone) / (state.checklist.length + state.craRequirements.length);
  const formScore = filled / required.length;
  const percent = Math.round(((formScore * 0.7) + (checklistScore * 0.3)) * 100);
  document.getElementById("completionPercent").textContent = `${percent}%`;
  document.getElementById("completionBar").style.width = `${percent}%`;
  const updated = state.updatedAt ? `Ostatni zapis: ${formatDateTime(state.updatedAt)}` : "Autosave aktywny.";
  document.getElementById("projectUpdatedAt").textContent = updated;
}

function updateSaveStatus() {
  const saveStatus = document.getElementById("saveStatus");
  if (!saveStatus) return;
  saveStatus.textContent = state.updatedAt ? `Zapisano lokalnie ${formatDateTime(state.updatedAt)}.` : "Stan będzie zapisany automatycznie.";
}

function markChecklist(code, status) {
  const item = state.checklist.find((entry) => entry.code === code);
  if (item && item.status === "not-started") {
    item.status = status;
  }
}

function exportJson() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json;charset=utf-8" });
  downloadBlob(blob, `${fileBaseName()}-${currentLanguage === "en" ? "data" : "dane"}.json`);
  showToast("Wyeksportowano JSON.");
}

function exportDoc() {
  const html = localizeHtml(buildDocHtml());
  const blob = new Blob(["\ufeff", html], { type: "application/msword;charset=utf-8" });
  downloadBlob(blob, `${fileBaseName()}-${currentLanguage === "en" ? "risk-analysis" : "analiza-ryzyka"}.doc`);
  showToast("Wygenerowano dokument DOC.");
}

function buildDocHtml() {
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(reportTitle())}</title>
  <style>
    body { font-family: Arial, Helvetica, sans-serif; color: #1f241f; line-height: 1.35; }
    h1 { font-size: 24pt; margin: 0 0 8pt; }
    h2 { font-size: 15pt; margin: 18pt 0 8pt; border-bottom: 1pt solid #999; padding-bottom: 3pt; }
    h3 { font-size: 12pt; margin: 12pt 0 6pt; }
    p { margin: 4pt 0; }
    table { border-collapse: collapse; width: 100%; margin: 6pt 0 12pt; }
    th, td { border: 1pt solid #999; padding: 5pt; vertical-align: top; font-size: 9pt; }
    th { background: #e9eee7; }
    .note { color: #555; font-size: 9pt; }
    .low { background: #d9eadf; }
    .medium { background: #fff1bd; }
    .high { background: #ffd8b4; }
    .critical { background: #f4b6b6; }
  </style>
</head>
<body>
  ${docBody()}
</body>
</html>`;
}

function localizeHtml(html) {
  if (currentLanguage !== "en") return html;
  let result = html;
  Object.entries(UI_TRANSLATIONS)
    .sort((a, b) => b[0].length - a[0].length)
    .forEach(([pl, en]) => {
      result = result.split(pl).join(en);
    });
  return result;
}

function docBody() {
  return `
    <h1>${escapeHtml(reportTitle())}</h1>
    <p class="note">Dokument roboczy oparty na strukturze procesu IEC 62443-3-2 oraz roboczej macierzy CRA dla produktów z elementami cyfrowymi. Nie zastępuje licencjonowanej treści norm ani formalnej oceny prawnej zakresu CRA.</p>

    <h2>1. Metryka dokumentu</h2>
    ${keyValueTable([
      ["Organizacja / projekt", state.meta.organization],
      ["Właściciel aktywów", state.meta.assetOwner],
      ["Wersja", state.meta.version],
      ["Data analizy", state.meta.analysisDate],
      ["Próg ryzyka tolerowanego", state.method.tolerableRisk],
      ["Data eksportu", new Date().toLocaleString("pl-PL")]
    ])}

    <h2>2. System podlegający rozważaniu</h2>
    ${keyValueTable([
      ["Opis SUC", state.suc.description],
      ["Granica SUC", state.suc.perimeter],
      ["Punkty dostępu", state.suc.accessPoints],
      ["Ryzyko początkowe", state.suc.initialRiskSummary]
    ])}

    <h2>3. Strefy</h2>
    ${zonesTable()}

    <h2>4. Conduits</h2>
    ${conduitsTable()}

    <h2>5. Rejestr scenariuszy ryzyka</h2>
    ${scenariosTable()}

    <h2>6. CRA: klasyfikacja komponentów TCMS/PIS</h2>
    ${componentsTable()}

    <h2>7. CRA: macierz Annex I i dokumentacja produktu</h2>
    ${keyValueTable([
      ["Normy i specyfikacje użyte jako dowód", state.cra.standardsApplied],
      ["Instrukcje bezpiecznej instalacji i eksploatacji", state.cra.secureUseInstructions],
      ["Plan obsługi podatności i aktualizacji", state.cra.vulnerabilityPlan],
      ["Notatki do EU Declaration of Conformity / CE", state.cra.declarationNotes]
    ])}
    ${craRequirementsTable()}

    <h2>8. CRA: SBOM i komponenty third-party</h2>
    ${sbomTable()}

    <h2>9. CRA: podatności, incydenty i raportowanie</h2>
    ${vulnerabilitiesTable()}

    <h2>10. Traceability: ryzyko, wymaganie, kontrola, test i dowód</h2>
    ${traceabilityTable()}

    <h2>11. Wymagania, założenia i ograniczenia 62443</h2>
    ${keyValueTable([
      ["Specyfikacja wymagań cyberbezpieczeństwa", state.docs.securityRequirements],
      ["Rysunki / odniesienia do stref i conduits", state.docs.drawings],
      ["Charakterystyka stref i conduits", state.docs.characteristics],
      ["Założenia środowiska operacyjnego", state.docs.operatingAssumptions],
      ["Środowisko zagrożeń", state.docs.threatEnvironment],
      ["Polityki organizacyjne", state.docs.policies],
      ["Tolerowane ryzyko", state.docs.tolerableRisk],
      ["Wymagania regulacyjne i kontraktowe", state.docs.regulatory]
    ])}

    <h2>12. Kontrola kompletności ZCR</h2>
    ${checklistTable()}

    <h2>13. Zatwierdzenie właściciela aktywów</h2>
    ${keyValueTable([
      ["Osoba zatwierdzająca", state.approval.approver],
      ["Data zatwierdzenia", state.approval.approvalDate],
      ["Decyzja", approvalDecisionLabel(state.approval.decision)],
      ["Następny przegląd", state.approval.nextReview],
      ["Notatki", state.approval.notes]
    ])}
  `;
}

function keyValueTable(rows) {
  return `
    <table>
      <tbody>
        ${rows.map(([key, value]) => `<tr><th style="width: 28%;">${escapeHtml(key)}</th><td>${nl2br(value || "-")}</td></tr>`).join("")}
      </tbody>
    </table>
  `;
}

function zonesTable() {
  if (!state.zones.length) return "<p>Brak stref.</p>";
  return `
    <table>
      <thead>
        <tr><th>#</th><th>Nazwa</th><th>Typ</th><th>SL-T</th><th>SL-T FR</th><th>Aktywa</th><th>Granice i separacja</th></tr>
      </thead>
      <tbody>
        ${state.zones.map((zone, index) => `
          <tr>
            <td>${index + 1}</td>
            <td>${escapeHtml(zone.name || "-")}</td>
            <td>${escapeHtml(zone.type || "-")}</td>
            <td>${escapeHtml(zone.slT || "0")}</td>
            <td>${escapeHtml(FR_LEVELS.map((fr) => `${fr.label}:${zone.sl?.[fr.key] ?? 0}`).join(", "))}</td>
            <td>${nl2br(zone.assets || "-")}</td>
            <td>${nl2br(zone.boundary || "-")}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function conduitsTable() {
  if (!state.conduits.length) return "<p>Brak conduits.</p>";
  return `
    <table>
      <thead>
        <tr><th>#</th><th>Nazwa</th><th>Ze strefy</th><th>Do strefy</th><th>SL-T</th><th>Protokoły / przepływy</th><th>Środki ochronne</th></tr>
      </thead>
      <tbody>
        ${state.conduits.map((conduit, index) => `
          <tr>
            <td>${index + 1}</td>
            <td>${escapeHtml(conduit.name || "-")}</td>
            <td>${escapeHtml(zoneLabel(conduit.fromZone))}</td>
            <td>${escapeHtml(zoneLabel(conduit.toZone))}</td>
            <td>${escapeHtml(conduit.slT || "0")}</td>
            <td>${nl2br(conduit.protocols || "-")}</td>
            <td>${nl2br(conduit.controls || "-")}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function scenariosTable() {
  if (!state.scenarios.length) return "<p>Brak scenariuszy ryzyka.</p>";
  return `
    <table>
      <thead>
        <tr>
          <th>#</th><th>Obszar</th><th>Zagrożenie</th><th>Podatność</th><th>Konsekwencja</th>
          <th>Ryzyko bez mitygacji</th><th>SL-T</th><th>Istniejące zabezpieczenia</th>
          <th>Ryzyko rezydualne</th><th>Dodatkowe środki</th><th>Właściciel / termin</th><th>Decyzja</th>
        </tr>
      </thead>
      <tbody>
        ${state.scenarios.map((scenario, index) => {
          const unmitigated = scoreScenario(scenario, false);
          const residual = scoreScenario(scenario, true);
          const residualStatus = riskStatus(residual);
          return `
            <tr>
              <td>${index + 1}</td>
              <td>${escapeHtml(targetLabel(scenario.target))}</td>
              <td>${escapeHtml(scenario.threat || "-")}</td>
              <td>${nl2br(scenario.vulnerability || "-")}</td>
              <td>${nl2br(scenario.consequence || "-")}</td>
              <td class="${riskStatus(unmitigated).docClass}">${unmitigated} (${riskStatus(unmitigated).label}); W:${scenario.impact}, P:${scenario.likelihood}</td>
              <td>${escapeHtml(scenario.slT || "0")}</td>
              <td>${nl2br(scenario.existingControls || "-")}</td>
              <td class="${residualStatus.docClass}">${residual} (${residualStatus.label}); W:${scenario.residualImpact}, P:${scenario.residualLikelihood}</td>
              <td>${nl2br(scenario.additionalControls || "-")}</td>
              <td>${escapeHtml(scenario.owner || "-")}<br>${escapeHtml(scenario.dueDate || "-")}</td>
              <td>${escapeHtml(decisionLabel(scenario.decision))}</td>
            </tr>
          `;
        }).join("")}
      </tbody>
    </table>
  `;
}

function componentsTable() {
  if (!state.components.length) return "<p>Brak komponentów CRA.</p>";
  return `
    <table>
      <thead>
        <tr><th>#</th><th>Nazwa</th><th>Obszar / typ</th><th>Dostawca / wersja</th><th>Zakres CRA</th><th>Kategoria / ocena zgodności</th><th>Support</th><th>Interfejsy i uzasadnienie</th></tr>
      </thead>
      <tbody>
        ${state.components.map((component, index) => `
          <tr>
            <td>${index + 1}</td>
            <td>${escapeHtml(component.name || "-")}</td>
            <td>${escapeHtml(component.systemArea || "-")}<br>${escapeHtml(component.componentType || "-")}</td>
            <td>${escapeHtml(component.supplier || "-")}<br>${escapeHtml(component.version || "-")}</td>
            <td>${escapeHtml(component.craScope || "-")}<br>${escapeHtml(component.marketRole || "-")}</td>
            <td>${escapeHtml(component.craCategory || "-")}<br>${escapeHtml(component.conformity || "-")}</td>
            <td>${escapeHtml(component.supportEnd || "-")}<br>${escapeHtml(component.securityContact || "-")}</td>
            <td>${nl2br(component.interfaces || "-")}<br>${nl2br(component.classificationRationale || "-")}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function craRequirementsTable() {
  return `
    <table>
      <thead><tr><th>Kod</th><th>Wymaganie</th><th>Status</th><th>Komponent</th><th>Dowód</th></tr></thead>
      <tbody>
        ${state.craRequirements.map((item) => `
          <tr>
            <td>${escapeHtml(item.code)}</td>
            <td>${escapeHtml(trText(item.title))}<br>${escapeHtml(trText(item.description))}</td>
            <td>${escapeHtml(statusLabel(item.status))}</td>
            <td>${escapeHtml(componentLabel(item.componentId))}</td>
            <td>${nl2br(item.evidence || "-")}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function sbomTable() {
  if (!state.sbom.length) return "<p>Brak wpisów SBOM.</p>";
  return `
    <table>
      <thead><tr><th>#</th><th>Komponent produktu</th><th>Składnik</th><th>Wersja</th><th>Dostawca</th><th>Licencja</th><th>Status CVE</th><th>Status aktualizacji</th><th>Notatki</th></tr></thead>
      <tbody>
        ${state.sbom.map((item, index) => `
          <tr>
            <td>${index + 1}</td>
            <td>${escapeHtml(componentLabel(item.componentId))}</td>
            <td>${escapeHtml(item.name || "-")}</td>
            <td>${escapeHtml(item.version || "-")}</td>
            <td>${escapeHtml(item.supplier || "-")}</td>
            <td>${escapeHtml(item.license || "-")}</td>
            <td>${escapeHtml(item.cveStatus || "-")}</td>
            <td>${escapeHtml(item.updateStatus || "-")}</td>
            <td>${nl2br(item.notes || "-")}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function vulnerabilitiesTable() {
  if (!state.vulnerabilities.length) return "<p>Brak podatności i incydentów.</p>";
  return `
    <table>
      <thead><tr><th>#</th><th>Komponent</th><th>Typ / ID</th><th>Severity</th><th>Aktywne wykorzystanie</th><th>Data wykrycia</th><th>Status poprawki</th><th>Raportowanie</th><th>Wpływ</th><th>Mitigacja</th></tr></thead>
      <tbody>
        ${state.vulnerabilities.map((item, index) => `
          <tr>
            <td>${index + 1}</td>
            <td>${escapeHtml(componentLabel(item.componentId))}</td>
            <td>${escapeHtml(item.entryType || "-")}<br>${escapeHtml(item.reference || "-")}</td>
            <td class="${severityClass(item.severity).replace("risk-", "")}">${escapeHtml(item.severity || "-")}</td>
            <td>${escapeHtml(item.activelyExploited || "-")}</td>
            <td>${escapeHtml(item.discoveredAt || "-")}</td>
            <td>${escapeHtml(item.patchStatus || "-")}</td>
            <td>${escapeHtml(reportingDueText(item))}</td>
            <td>${nl2br(item.impact || "-")}</td>
            <td>${nl2br(item.mitigation || "-")}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function traceabilityTable() {
  if (!state.traceability.length) return "<p>Brak dowodów traceability.</p>";
  return `
    <table>
      <thead><tr><th>#</th><th>Scenariusz</th><th>Komponent</th><th>Wymaganie</th><th>Kontrola</th><th>Test / weryfikacja</th><th>Wynik</th><th>Dowód</th><th>Właściciel</th></tr></thead>
      <tbody>
        ${state.traceability.map((item, index) => `
          <tr>
            <td>${index + 1}</td>
            <td>${escapeHtml(scenarioLabel(item.scenarioId))}</td>
            <td>${escapeHtml(componentLabel(item.componentId))}</td>
            <td>${escapeHtml(requirementLabel(item.requirementCode))}</td>
            <td>${nl2br(item.control || "-")}</td>
            <td>${nl2br(item.verification || "-")}</td>
            <td>${escapeHtml(item.result || "-")}</td>
            <td>${nl2br(item.evidence || "-")}</td>
            <td>${escapeHtml(item.owner || "-")}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function checklistTable() {
  return `
    <table>
      <thead><tr><th>ZCR</th><th>Zakres kontroli</th><th>Status</th><th>Notatka / dowód</th></tr></thead>
      <tbody>
        ${state.checklist.map((item) => `
          <tr>
            <td>${escapeHtml(item.code)}</td>
            <td>${escapeHtml(item.title)}</td>
            <td>${escapeHtml(statusLabel(item.status))}</td>
            <td>${nl2br(item.notes || "-")}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function riskStatus(score) {
  const value = Number(score) || 0;
  if (value <= 4) return { label: "Niskie", className: "risk-low", docClass: "low" };
  if (value <= 9) return { label: "Średnie", className: "risk-medium", docClass: "medium" };
  if (value <= 15) return { label: "Wysokie", className: "risk-high", docClass: "high" };
  return { label: "Krytyczne", className: "risk-critical", docClass: "critical" };
}

function scoreScenario(scenario, residual) {
  const impact = residual ? scenario.residualImpact : scenario.impact;
  const likelihood = residual ? scenario.residualLikelihood : scenario.likelihood;
  return clampNumber(impact, 1, 5, 1) * clampNumber(likelihood, 1, 5, 1);
}

function selectOptions(options, selected) {
  const value = String(selected ?? "");
  return options.map(([optionValue, label]) => `<option value="${escapeAttr(optionValue)}"${String(optionValue) === value ? " selected" : ""}>${escapeHtml(label)}</option>`).join("");
}

function slOptions(selected) {
  const value = String(selected ?? "0");
  return [0, 1, 2, 3, 4].map((level) => `<option value="${level}"${String(level) === value ? " selected" : ""}>${level}</option>`).join("");
}

function systemAreaOptions(selected) {
  return selectOptions([
    ["TCMS", "TCMS"],
    ["PIS", "Informacja pasażerska"],
    ["Network", "Sieć pokładowa"],
    ["Remote", "Remote service / train-to-ground"],
    ["Maintenance", "Utrzymanie / diagnostyka"],
    ["Passenger", "Passenger Wi-Fi / usługi pasażerskie"],
    ["Other", "Inny"]
  ], selected);
}

function componentTypeOptions(selected) {
  return selectOptions([
    ["Hardware", "Hardware"],
    ["Firmware", "Firmware"],
    ["Software", "Software"],
    ["Network device", "Urządzenie sieciowe"],
    ["Remote processing", "Remote data processing"],
    ["Service tool", "Narzędzie serwisowe"],
    ["Other", "Inny"]
  ], selected);
}

function marketRoleOptions(selected) {
  return selectOptions([
    ["Manufacturer", "Manufacturer"],
    ["Importer", "Importer"],
    ["Distributor", "Distributor"],
    ["Integrator", "Integrator / system designer"],
    ["Asset owner", "Asset owner"],
    ["To be assessed", "Do ustalenia"]
  ], selected);
}

function craScopeOptions(selected) {
  return selectOptions([
    ["In scope", "W zakresie"],
    ["Out of scope", "Poza zakresem"],
    ["Needs legal assessment", "Wymaga oceny prawnej"],
    ["Not placed separately", "Nie wprowadzany osobno"]
  ], selected);
}

function craCategoryOptions(selected) {
  return selectOptions([
    ["Default", "Default"],
    ["Important Class I", "Important Class I"],
    ["Important Class II", "Important Class II"],
    ["Critical", "Critical"],
    ["To be assessed", "Do ustalenia"]
  ], selected);
}

function conformityOptions(selected) {
  return selectOptions([
    ["Self-assessment", "Self-assessment"],
    ["Harmonised standards required", "Normy zharmonizowane wymagane"],
    ["Notified body likely", "Prawdopodobnie notified body"],
    ["Notified body mandatory", "Notified body wymagany"],
    ["To be assessed", "Do ustalenia"]
  ], selected);
}

function componentSelectOptions(selected = "", emptyLabel = "Wybierz komponent") {
  const emptyOption = `<option value=""${!selected ? " selected" : ""}>${escapeHtml(emptyLabel)}</option>`;
  if (!state.components.length) return '<option value="">Brak komponentów</option>';
  return emptyOption + state.components.map((component) => `<option value="${escapeAttr(component.id)}"${component.id === selected ? " selected" : ""}>${escapeHtml(component.name || "Komponent bez nazwy")}</option>`).join("");
}

function cveStatusOptions(selected) {
  return selectOptions([
    ["Not checked", "Nie sprawdzono"],
    ["No known CVE", "Brak znanych CVE"],
    ["Known CVE accepted", "CVE zaakceptowane"],
    ["Known CVE mitigated", "CVE zmitygowane"],
    ["Patch required", "Wymaga poprawki"]
  ], selected);
}

function updateStatusOptions(selected) {
  return selectOptions([
    ["Current", "Aktualny"],
    ["Update planned", "Aktualizacja planowana"],
    ["Pinned", "Wersja zamrożona"],
    ["End of support", "Koniec wsparcia"]
  ], selected);
}

function entryTypeOptions(selected) {
  return selectOptions([
    ["Vulnerability", "Podatność"],
    ["Severe incident", "Poważny incydent"],
    ["Near miss", "Near miss"],
    ["Advisory", "Advisory"]
  ], selected);
}

function severityOptions(selected) {
  return selectOptions([
    ["Low", "Low"],
    ["Medium", "Medium"],
    ["High", "High"],
    ["Critical", "Critical"]
  ], selected);
}

function activelyExploitedOptions(selected) {
  return selectOptions([
    ["No", "Nie"],
    ["Yes", "Tak"],
    ["Unknown", "Nie wiadomo"]
  ], selected);
}

function patchStatusOptions(selected) {
  return selectOptions([
    ["Triage", "Triage"],
    ["Patch planned", "Poprawka planowana"],
    ["Patch available", "Poprawka dostępna"],
    ["Mitigated", "Zmitygowane"],
    ["Accepted", "Zaakceptowane"],
    ["Closed", "Zamknięte"]
  ], selected);
}

function reportingStatusOptions(selected) {
  return selectOptions([
    ["Not reportable", "Nie podlega"],
    ["Assess reportability", "Ocenić raportowalność"],
    ["24h early warning due", "24h early warning"],
    ["72h notification due", "72h notification"],
    ["Final report due", "Final report"],
    ["Reported", "Zgłoszone"]
  ], selected);
}

function scenarioSelectOptions(selected = "") {
  const emptyOption = `<option value=""${!selected ? " selected" : ""}>Wybierz scenariusz</option>`;
  if (!state.scenarios.length) return '<option value="">Brak scenariuszy</option>';
  return emptyOption + state.scenarios.map((scenario) => `<option value="${escapeAttr(scenario.id)}"${scenario.id === selected ? " selected" : ""}>${escapeHtml(scenario.threat || "Scenariusz bez nazwy")}</option>`).join("");
}

function requirementSelectOptions(selected = "") {
  const emptyOption = `<option value=""${!selected ? " selected" : ""}>Wybierz wymaganie</option>`;
  return emptyOption + state.craRequirements.map((item) => `<option value="${escapeAttr(item.code)}"${item.code === selected ? " selected" : ""}>${escapeHtml(`${item.code} ${trText(item.title)}`)}</option>`).join("");
}

function traceResultOptions(selected) {
  return selectOptions([
    ["Planned", "Planowane"],
    ["Passed", "Passed"],
    ["Failed", "Failed"],
    ["Accepted with deviation", "Akceptacja z odstępstwem"],
    ["Not applicable", "Nie dotyczy"]
  ], selected);
}

function typeOptions(selected) {
  const options = [
    ["IACS", "IACS"],
    ["Business", "Business / IT"],
    ["Safety", "Safety-related"],
    ["Wireless", "Wireless"],
    ["External", "External network"],
    ["Temporary", "Temporary devices"],
    ["Other", "Inna"]
  ];
  return options.map(([value, label]) => `<option value="${value}"${value === selected ? " selected" : ""}>${label}</option>`).join("");
}

function zoneSelectOptions(selected) {
  if (!state.zones.length) return '<option value="">Brak stref</option>';
  return state.zones.map((zone) => `<option value="${escapeAttr(zone.id)}"${zone.id === selected ? " selected" : ""}>${escapeHtml(zone.name || "Strefa bez nazwy")}</option>`).join("");
}

function scenarioTargetOptions(selected = "suc") {
  const options = [['suc', 'Cały SUC']];
  state.zones.forEach((zone) => options.push([`zone:${zone.id}`, `Strefa: ${zone.name || "bez nazwy"}`]));
  state.conduits.forEach((conduit) => options.push([`conduit:${conduit.id}`, `Conduit: ${conduit.name || "bez nazwy"}`]));
  return options.map(([value, label]) => `<option value="${escapeAttr(value)}"${value === selected ? " selected" : ""}>${escapeHtml(label)}</option>`).join("");
}

function decisionOptions(selected) {
  const options = [
    ["Mitigate", "Mitygować"],
    ["Accept", "Akceptować"],
    ["Transfer", "Transferować"],
    ["Avoid", "Unikać"]
  ];
  return options.map(([value, label]) => `<option value="${value}"${value === selected ? " selected" : ""}>${label}</option>`).join("");
}

function statusOptions(selected) {
  return STATUS_OPTIONS.map(([value, label]) => `<option value="${value}"${value === selected ? " selected" : ""}>${label}</option>`).join("");
}

function statusLabel(value) {
  return STATUS_OPTIONS.find(([optionValue]) => optionValue === value)?.[1] || value || "-";
}

function decisionLabel(value) {
  return {
    Mitigate: "Mitygować",
    Accept: "Akceptować",
    Transfer: "Transferować",
    Avoid: "Unikać"
  }[value] || value || "-";
}

function approvalDecisionLabel(value) {
  return {
    Draft: "Szkic",
    Approved: "Zatwierdzone",
    "Approved with actions": "Zatwierdzone z działaniami",
    Rejected: "Odrzucone"
  }[value] || value || "-";
}

function zoneLabel(zoneId) {
  if (!zoneId) return "-";
  return state.zones.find((zone) => zone.id === zoneId)?.name || "Usunięta strefa";
}

function targetLabel(target) {
  if (!target || target === "suc") return "Cały SUC";
  if (target.startsWith("zone:")) {
    return `Strefa: ${zoneLabel(target.slice(5))}`;
  }
  if (target.startsWith("conduit:")) {
    const conduit = state.conduits.find((item) => item.id === target.slice(8));
    return `Conduit: ${conduit?.name || "usunięty conduit"}`;
  }
  return target;
}

function componentLabel(componentId) {
  if (!componentId) return "-";
  return state.components.find((component) => component.id === componentId)?.name || "Usunięty komponent";
}

function scenarioLabel(scenarioId) {
  if (!scenarioId) return "-";
  return state.scenarios.find((scenario) => scenario.id === scenarioId)?.threat || "Usunięty scenariusz";
}

function requirementLabel(code) {
  if (!code) return "-";
  const requirement = state.craRequirements.find((item) => item.code === code);
  return requirement ? `${requirement.code} ${requirement.title}` : code;
}

function severityClass(severity) {
  return {
    Low: "risk-low",
    Medium: "risk-medium",
    High: "risk-high",
    Critical: "risk-critical"
  }[severity] || "risk-medium";
}

function reportingDueText(item) {
  if (!item.discoveredAt) return item.reportingStatus || "brak daty wykrycia";
  if (item.reportingStatus === "24h early warning due") {
    return `24h do ${formatDateTime(addHours(item.discoveredAt, 24))}`;
  }
  if (item.reportingStatus === "72h notification due") {
    return `72h do ${formatDateTime(addHours(item.discoveredAt, 72))}`;
  }
  return item.reportingStatus || "-";
}

function addHours(value, hours) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  date.setHours(date.getHours() + hours);
  return date.toISOString();
}

function getPath(source, path) {
  return path.split(".").reduce((current, part) => current?.[part], source);
}

function setPath(target, path, value) {
  const parts = path.split(".");
  const last = parts.pop();
  const owner = parts.reduce((current, part) => {
    if (!current[part] || typeof current[part] !== "object") current[part] = {};
    return current[part];
  }, target);
  owner[last] = value;
}

function getFieldValue(field) {
  if (field.type === "checkbox") return field.checked;
  if (field.type === "number") return Number(field.value);
  return field.value;
}

function setFieldValue(field, value) {
  if (field.type === "checkbox") {
    field.checked = Boolean(value);
    return;
  }
  field.value = value ?? "";
}

function clampNumber(value, min, max, fallback) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.max(min, Math.min(max, parsed));
}

function isFilled(value) {
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === "number") return value > 0;
  if (typeof value === "boolean") return value;
  return String(value || "").trim().length > 0;
}

function reportTitle() {
  return state.meta.title || (currentLanguage === "en"
    ? "IEC 62443-3-2 cybersecurity risk analysis"
    : "Analiza ryzyka cyberbezpieczeństwa IEC 62443-3-2");
}

function fileBaseName() {
  const base = reportTitle()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return base || "analiza-ryzyka-62443";
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 400);
}

function createId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}

function nl2br(value) {
  return escapeHtml(value || "-").replace(/\n/g, "<br>");
}

function dash(value) {
  return escapeHtml(value || "-");
}

function formatDateTime(value) {
  try {
    return new Date(value).toLocaleString("pl-PL", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });
  } catch {
    return value;
  }
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = trText(message);
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 2400);
}
