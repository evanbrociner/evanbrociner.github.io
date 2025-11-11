import React from 'react';
import { Section } from '@/types';

export const medicaidData: Section[] = [
  {
    id: 'start',
    navTitle: 'Medicaid 101',
    title: 'Medicaid 101',
    terms: [
      { term: 'CBO (Community Based Organization)', description: 'A non-profit organization that provides services and support to a specific community, often focusing on social and health needs.' },
      { term: 'CHW (Community Health Worker)', description: 'A frontline public health professional who serves as a trusted link between healthcare providers and a community, often focusing on outreach and health education.' },
      { term: 'Capitated Payments', description: 'A payment model where healthcare providers receive a fixed amount per patient per month, regardless of the number of services provided.' },
      { term: 'Doula', description: 'Non-clinically trained professionals who can provide emotional, physical, and informational support and guidance during the prenatal, birth, and postpartum period' },
      { term: 'FQHC (Federally Qualified Health Center)', description: 'A community-based health clinic that receives federal funding to provide primary care services in underserved areas.' },
      { term: 'Health Coaches', description: 'Professionals who work with individuals to set health goals, develop action plans, and provide guidance on healthy lifestyle choices.' },
      { term: 'MCO (Managed Care Organization)', description: 'A type of health insurance company that contracts with healthcare providers to form a network and emphasizes preventative care and cost management.' },
      { term: 'Managed Care', description: 'A type of health insurance where the insurer contracts with healthcare providers and coordinates care to control costs and improve quality.' },
      { term: 'Medicaid', description: 'A government-funded health insurance program for low-income individuals and families.' },
    ],
    image: {
        src: '/img/medicaid/funds_workflow.png',
        alt: 'Medicaid funds workflow diagram',
        width: 800,
        height: 600,
    },
    breakdown: {
      rows: [
        { group: 'Seniors', cost: '$122,304,815,900 (21.23%)', people: '8,527,000 (9.71%)', costRatio: '$14,342.34', weight: '0.2555' },
        { group: 'Individuals with Disabilities', cost: '$196,614,960,400 (34.09%)', people: '10,037,600 (11.42%)', costRatio: '$19,571.25', weight: '0.3491' },
        { group: 'Adult', cost: '$56,884,386,300 (9.87%)', people: '14,812,200 (16.87%)', costRatio: '$3,838.79', weight: '0.0683' },
        { group: 'Children', cost: '$100,323,192,200 (17.43%)', people: '35,361,500 (40.26%)', costRatio: '$2,835.62', weight: '0.0506' },
        { group: 'Newly Eligible Adult', cost: '$99,956,643,000 (17.36%)', people: '19,129,700 (21.77%)', costRatio: '$5,224.39', weight: '0.0933' },
        { group: 'Total', cost: '$576,083,997,800 (100%)', people: '87,868,000 (100%)', costRatio: 'N/A', weight: 'N/A' },
      ],
      legend: (
        <>
          <h5>Legend</h5>
          <ul>
            <li><strong>Enrollees:</strong> Individuals who are enrolled in Medicaid at any time during the calendar year.</li>
            <li><strong>Seniors:</strong> Includes all people age 65 and older.</li>
            <li><strong>Individuals with Disabilities:</strong> Includes people under age 65 who are reported as eligible due to a disability.</li>
            <li><strong>Adults:</strong> Generally people age 19 to 64. Adults include a small number of people who are eligible through the Breast and Cervical Cancer Prevention and Treatment Act of 2000.</li>
            <li><strong>Children:</strong> Generally people age 18 and younger. However, some people age 19 and older may be classified as "children" depending on why they qualify for the program and each state's practices.</li>
            <li><strong>Newly Eligible Adults:</strong> Adults in the expansion group who were made newly eligible for Medicaid by the ACA Medicaid expansion.</li>
          </ul>
        </>
      ),
    },
  },
  {
    id: 'managed-care',
    navTitle: 'Managed Care',
    title: 'Managed Care',
    intro: 'Medicaid managed care should focus on developing predictive models to identify patients who will benefit most from care management and addressing social determinants of health (SDOH) like housing and food. It should invest in both medical and non-medical services for high-cost subgroups, involve consumers in program design to enhance engagement and meet community needs, and implement better predictive models and tailored interventions for super-utilizers. Effective strategies include structured follow-ups, preventive care, multidisciplinary teams, and data analytics. Integrated care approaches, such as those demonstrated by programs like CareMore, should be adopted to improve outcomes and cost-effectiveness by addressing social needs.',
    resources: [
        {
            title: 'Active Redesign of a Medicaid Care Management Strategy for Greater Return on Investment: Predicting Impactability',
            url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5906722/pdf/pop.2017.0122.pdf',
            description: (
                <>
                    <p>Care management of high-cost/high-needs patients is an increasingly common strategy to reduce health care costs. A variety of targeting methodologies have emerged to identify patients with high historical or predicted health care utilization, but the more pertinent question for program planners is how to identify those who are most likely to benefit from care management intervention. This paper describes the evolution of complex care management targeting strategies in Community Care of North Carolina’s (CCNC) work with the statewide non-dual Medicaid population, culminating in the development of an ‘‘Impactability Score’’ that uses administrative data to predict achievable savings.</p>
                    <h5>Key Points</h5>
                    <ul>
                        <li>Care management of high-cost/high-needs patients is an increasingly common strategy to reduce health care costs.</li>
                        <li>A variety of targeting methodologies have emerged to identify patients with high historical or predicted health care utilization, but the more pertinent question for program planners is how to identify those who are most likely to benefit from care management intervention.</li>
                        <li>This paper describes the evolution of complex care management targeting strategies in Community Care of North Carolina’s (CCNC) work with the statewide non-dual Medicaid population, culminating in the development of an ‘‘Impactability Score’’ that uses administrative data to predict achievable savings.</li>
                    </ul>
                </>
            )
        },
        {
            title: 'Addressing Social Drivers Of Health In The Medicaid Managed Care Environment',
            url: 'https://www.healthaffairs.org/content/forefront/three-opportunities-address-social-drivers-health-medicaid-managed-care-environment',
            description: (
                <>
                    <p>This article explores how Medicaid managed care programs can better address social factors that influence health outcomes. It argues that collaboration between Medicaid managed care organizations and community-based organizations is essential to meet patients social needs.</p>
                    <h5>Key Points</h5>
                    <ul>
                        <li>Medicaid managed care programs are required to address social drivers of health (SDOH).</li>
                        <li>SDOH include factors like housing, food, and transportation that affect health outcomes.</li>
                        <li>The COVID-19 pandemic highlighted the importance of SDOH.</li>
                        <li>States are increasingly using Medicaid waivers to address SDOH.</li>
                        <li><strong>Recommendations for States:</strong>
                            <ul>
                                <li>Foster a culture of MCO accountability and innovation.</li>
                                <li>Leverage new Medicaid momentum.</li>
                                <li>Expand payment approaches to fully support MCO-CBO partnerships.</li>
                            </ul>
                        </li>
                    </ul>
                </>
            )
        },
        {
            title: 'Dispelling The Myths Hindering Medicaid Innovation',
            url: 'https://www.healthaffairs.org/content/forefront/dispelling-myths-hindering-medicaid-innovation',
            description: (
                <>
                    <p><b>Discusses the misconception that Medicaid has no money for innovation. In reality, Medicaid plans have incentives to invest in medical and non-medical services.</b></p>
                    <h5>Key Points</h5>
                    <ul>
                        <li>The authors propose that startups can target Medicaid <b>subgroups with high costs</b>, such as seniors and people with disabilities.</li>
                        <li>Additionally, they suggest that <b>Medicaid plans</b> are increasingly looking to <b>contract out inefficiencies.</b></li>
                    </ul>
                </>
            )
        },
        {
            title: 'Engaging Consumers in Medicaid Program Design: Strategies from the States',
            url: 'https://onlinelibrary.wiley.com/doi/10.1111/1468-0009.12492',
            description: (
                <>
                    <p>This paper examines how Medicaid agencies in 14 states engage consumers in program design, emphasizing common facilitators like leadership commitment and flexible recruitment strategies, and advocates for sharing best practices to improve engagement and address community needs.</p>
                    <h5>Key Points</h5>
                    <ul>
                        <li>There is a rise in complexity for Medicaid programs, and consumer input might be important for successful design.</li>
                        <li>Researchers interviewed Medicaid leaders in 14 states and found big differences in how they involve consumers.</li>
                        <li>Sharing best practices across states could help strengthen programs’ engagement efforts, identify opportunities for program improvement reflecting community needs, and increase participation among a population that has traditionally lacked a political voice.</li>
                    </ul>
                </>
            )
        },
        {
            title: 'For Many Patients Who Use Large Amounts Of Health Care Services, The Need Is Intense Yet Temporary',
            url: 'https://emergencymedicine.wustl.edu/wp-content/uploads/2018/09/PGY-3-Johnson.-Many-Patients-Who-super-Use-Health-Care-Services-The-Need-Is-Intense-Yet-Temporary.-Health-Affairs.20115.pdf',
            description: (
                <>
                    <p>This paper analyzed 4,774 super-utilizers in an urban safety-net system, finding that only 3% of adult patients accounted for 30% of charges, with fewer than half remaining super-utilizers after seven months, highlighting the need for improved predictive models and tailored interventions.</p>
                    <h5>Key Points</h5>
                    <ul>
                        <li>Around 3% of adult patients were identified as super-utilizers, accounting for 30% of adult healthcare charges in the study period.</li>
                        <li>Less than half of super-utilizers identified at the start of the study remained in that category after seven months, with only 28% remaining at the end of a year.</li>
                        <li>The transient nature of super-utilizer status highlights the need for improved predictive models and tailored interventions for different patient subgroups to manage avoidable healthcare utilization effectively.</li>
                    </ul>
                </>
            )
        },
        {
            title: 'How to Improve Care for High-Need, High-Cost Medicaid Patients',
            url: 'https://hbr.org/2020/02/how-to-improve-care-for-high-need-high-cost-medicaid-patients',
            description: (
                <>
                    <p><b>This article provides insights into cost-effective ways to serve patients who have complex health problems and social needs.</b></p>
                    <h5>Key Points</h5>
                    <ul>
                        <li><b>The costliest 5% of patients incurred roughly 70% of all spending. Most had multiple chronic medical conditions, often with co-occurring behavioral health disorders. Many also had significant social needs, ranging from housing instability to food insecurity.</b></li>
                        <li>A program in Memphis, Tennessee, reduced total spending by 37% per patient by keeping patients out of the hospital.</li>
                        <li>The program targeted high-need, high-cost Medicaid patients with multiple chronic medical conditions and behavioral health disorders.</li>
                        <li>The program provided patients with frequent, structured follow-ups, including weekly check-ins from a community health worker, monthly in-person visits with the entire care team, and additional customized follow-ups.</li>
                        <li>The program also addressed patients social needs, such as housing instability and food insecurity.</li>
                        <li>The program led to a $7,732 (or 37%) reduction in total medical spending per patient per year. This was driven primarily by decreases in hospital utilization: Patients were less likely to be admitted to the hospital (50%decrease in rates) and had shorter lengths of stay (22% decrease).</li>
                    </ul>
                </>
            )
        },
        {
            title: 'Managing Cost of Care: Lessons from Successful Organizations',
            url: 'https://www.chcf.org/wp-content/uploads/2017/12/PDF-ManagingCostofCare.pdf',
            description: (
                <>
                    <p><b>The article outlines successful strategies used by healthcare organizations to manage cost of care, including leadership, cultural alignment, primary care based models, and organizationally based models.</b></p>
                    <h5>Key Points</h5>
                    <h6><b>Primary Care Based Models:</b></h6>
                    <ul>
                        <li>Use hospitalists to provide care for admitted patients, which can reduce lengths of stay and readmission rates.</li>
                        <li>Implement multidisciplinary teams to coordinate care for patients, which can improve quality and efficiency.</li>
                        <li>Focus on preventive care to keep patients healthy and out of the hospital.</li>
                    </ul>
                    <h6><b>Organizationally Based Models:</b></h6>
                    <ul>
                        <li>Develop clinical pathways to standardize care for patients with common conditions, which can reduce costs and improve quality.</li>
                        <li>Implement bundled payments, which provide a fixed payment for a defined episode of care, which can encourage providers to reduce costs.</li>
                        <li>Use data analytics to identify and track areas where costs can be reduced.</li>
                    </ul>
                </>
            )
        },
        {
            title: 'Reframing Value-Based Care Management Beyond Cost Reduction and Toward Patient Centerednesse',
            url: 'https://jamanetwork.com/journals/jama-health-forum/fullarticle/2806235',
            description: (
                <>
                    <p><b>The article describes a care management program implemented by Mass General Brigham, a large healthcare system. The program uses a multidimensional approach to assess patients’ needs and match them to the most appropriate care program. The goal is to provide the right care to the right patient at the right time.</b></p>
                    <h5>Key Points</h5>
                    <ul>
                        <li><b>Multidimensional assessment:</b> Patients are assessed on a variety of factors, including their medical conditions, social determinants of health, and behavioral health needs. This helps to ensure that care plans are tailored to the individual needs of each patient.</li>
                        <li><b>Stratification of care:</b> Patients are then stratified into different care programs based on their needs. For example, patients with complex medical conditions may be assigned to a care program that provides more intensive care management, while patients with less complex needs may be assigned to a program that provides more self-management support.</li>
                        <li><b>Care management:</b> Care managers work with patients to develop and implement their care plans. They also provide ongoing support and monitoring to help patients stay on track with their goals.</li>
                        <li><b>Data-driven decision making:</b> The program uses data to track patient outcomes and identify areas for improvement. This data is used to inform the development and refinement of the care programs.</li>
                    </ul>
                </>
            )
        },
        {
            title: 'Rethinking How Medicaid Patients Receive Care',
            url: 'https://hbr.org/2018/10/rethinking-how-medicaid-patients-receive-care',
            description: (
                <>
                    <p><b>The CareMore model has generated promising results in Memphis and Des Moines, and it is now expanding to other locations. This model includes comprehensive, relationship-based primary care, collaborative behavioral health, community and patient engagement focused on social needs, and the breakdown of silos between inpatient care and the community.</b></p>
                    <h5>Key Points</h5>
                    <ul>
                        <li>Traditional Medicaid care models often create silos, isolating patients during hospitalization and making it difficult to manage their health after discharge.</li>
                        <li>CareMore, a health plan, focuses on actively managing Medicaid patients during hospitalization and the crucial period immediately following discharge.</li>
                        <li>This integrated approach includes strategies like addressing food insecurity, providing in-home care, and offering behavioral health services for substance abuse.</li>
                        <li>The goal is to prove that improved Medicaid managed care can significantly enhance the quality and cost-effectiveness of care for various populations.</li>
                        <li>The key lies in designing care models that specifically <b>address the unique needs of the Medicaid population.</b></li>
                    </ul>
                </>
            )
        }
    ]
  },
  {
    id: 'duals',
    navTitle: 'Duals',
    title: 'Duals',
    resources: [
        {
            title: 'How Does Use of Medicaid Wraparound Services by Dual-Eligible Individuals Vary by Service, State, and Enrollees’ Demographics?',
            url: 'https://www.kff.org/medicaid/issue-brief/how-does-use-of-medicaid-wraparound-services-by-dual-eligible-individuals-vary-by-service-state-and-enrollees-demographics/',
            description: (
                <>
                    <p><b>The article reports that the use of Medicaid wraparound services varies by state and enrollee demographics.</b></p>
                    <h5>Key Points</h5>
                    <ul>
                        <li><b>Over 60% of dual-eligible individuals use at least one wraparound service.</b></li>
                        <li>These services include vision, dental, and home-based care.</li>
                        <li>The use of these services varies by state, with rates ranging from 32% to 88%.</li>
                        <li>Racial and ethnic minorities and younger adults are less likely to use these services.</li>
                    </ul>
                </>
            )
        }
    ]
  },
  {
    id: 'waiver-1115',
    navTitle: '1115 Waiver',
    title: '1115 Waiver',
    resources: [
        {
            title: 'Growing Pains as California Adds Social Services to Medicaid',
            url: 'https://tradeoffs.org/2023/10/26/calaim-california-medicaid-transformation/',
            description: (
                <>
                    <h5>Key Points</h5>
                    <ul>
                        <li>California Medicaid program, CalAIM, aims to improve health outcomes for low-income residents by addressing social needs like housing and food.</li>
                        <li><b>Implementation has been challenging, with providers and insurers facing difficulties in collaboration.</b></li>
                        <li>The state is making changes to address these challenges, including increasing provider payments and simplifying paperwork.</li>
                    </ul>
                </>
            )
        },
        {
            title: 'Medicaid Waiver Tracker: Approved and Pending Section 1115 Waivers by State',
            url: 'https://www.kff.org/medicaid/issue-brief/medicaid-waiver-tracker-approved-and-pending-section-1115-waivers-by-state/',
            description: 'This page tracks approved and pending Section 1115 Medicaid demonstration waivers, which offer states an avenue to test new approaches in Medicaid that differ from what is required by federal statute.'
        }
    ]
  },
  {
    id: 'social-care',
    navTitle: 'Social Care',
    title: 'Social Care',
    intro: 'Social care in Medicaid faces significant challenges, notably in securing sustainable funding for community health worker (CHW) programs. Discussions underscore the necessity of higher Medicaid funding to support these initiatives effectively. Regulatory complexities present barriers to implementing social care programs, leading to uncertainty and potential non-compliance among health plans. Clearer guidance from policymakers is advocated to mitigate these challenges and encourage the integration of social care services within Medicaid frameworks.',
    resources: [
        {
            title: 'Community As Medicine | Elizabeth Markle',
            url: 'https://www.youtube.com/watch?v=cyNLd746V_o',
            description: 'Dr. Elizabeth Markle asks: Do your experiences with healthcare leave you feeling uplifted, honored, empowered, and connected? For many of us, our struggles to be physically and mentally healthy can feel like an endless, impossible climb: we feel shame, isolation, and overwhelm. Community As Medicine offers both a bold possibility for transformation of healthcare systems and an immediate strategy for caring for ourselves and our loved ones.'
        },
        {
            title: 'Emergency Shelter: Reimagining a Housing Focused Place People Want to Use',
            url: 'https://endhomelessness.org/event/emergency-shelter-reimagining-a-housing-focused-place-people-want-to-use/',
            description: (
                <>
                    <p><b>This conversation discusses the challenges and potential solutions for improving homeless shelters, emphasizing the need for low-barrier entry, staff empowerment, diverse funding, and addressing systemic issues like housing shortages.</b></p>
                    <h5>Key Points</h5>
                    <ul>
                        <li><strong>Rethinking Shelter Models:</strong>
                            <ul>
                                <li>Lowering barriers to entry (allowing pets, fewer rules) is crucial for building trust and meeting immediate needs.</li>
                                <li>This approach requires a shift in staff training and culture, focusing on empowerment, relationship-building, and treating individuals with dignity.</li>
                                <li>Shelters should prioritize short-term stays and swift transitions to permanent housing, but this is often hampered by housing shortages.</li>
                            </ul>
                        </li>
                        <li><strong>Funding and Sustainability:</strong>
                            <ul>
                                <li>Government funding is often insufficient, forcing shelters to seek diverse funding sources (thrift stores, foundations, etc.).</li>
                                <li>While low-barrier models might seem more expensive due to increased staff training and support, they can be cost-effective in the long run by reducing chronic homelessness.</li>
                                <li>Data collection is important, but qualitative data (like trust-building and meeting basic needs) is often overlooked by funders.</li>
                            </ul>
                        </li>
                    </ul>
                </>
            )
        },
        {
            title: 'Empowering CBOs with Data',
            url: 'https://podcasts.apple.com/us/podcast/pop-health-podcast/id1699797126?i=1000653215882',
            description: 'The Pop Health Podcast sits down with Renee Hungerford and Scott Dillingham to discuss the partnership between Community Action of Orleans and Genesee and Continual Care Solutions to build a comprehensive data ecosystem for CBOs and the implications for this moment in health care with the growing use 1115 waivers to establish and support social networks of care.'
        },
        {
            title: 'Financing Thresholds for Sustainability of Community Health Worker Programs for Patients Receiving Medicaid Across the United States',
            url: 'https://link.springer.com/article/10.1007/s10900-023-01290-w',
            description: (
                <>
                    <p><b>This article is about financing community health worker programs through Medicaid. It discusses the challenges of finding sustainable funding for these programs.</b></p>
                    <h5>Key Points</h5>
                    <ul>
                        <li>The authors propose using a microsimulation model to estimate the costs of CHW programs.</li>
                        <li>They found that the minimum fee-for-service rate for a 30-minute visit was $53.24 and the minimum capitated rate was $140.18 per member per month.</li>
                        <li>These rates varied by location and panel size.</li>
                        <li>The authors conclude that <b>higher Medicaid funding is needed to support CHW programs.</b></li>
                    </ul>
                </>
            )
        },
        {
            title: 'Health Systems and Social Services—A Bridge Too Far?',
            url: 'https://jamanetwork.com/journals/jama-health-forum/fullarticle/2808719',
            description: (
                <>
                    <p><b>The authors of this paper provide a unique question of where healthcare starts and stops.</b></p>
                    <h5>Key Points</h5>
                    <ul>
                        <li>Health systems are designed for the delivery of healthcare and <b>lack the expertise or resources to tackle the complexity of social factors impacting health</b>.</li>
                        <li><b>Solutions are most effective when they come from within the community</b>, as those organizations understand the nuances of local needs and have existing relationships of trust.</li>
                        <li><b>Health systems can play a valuable role by partnering with community organizations</b>, offering resources and data, <b>but should avoid assuming a leading role.</b></li>
                    </ul>
                </>
            )
        },
        {
            title: 'How Health Care Organizations Should Support Social Services',
            url: 'https://jamanetwork.com/journals/jama-health-forum/fullarticle/2811945#:~:text=The%20key%20to%20achieving%20an,strategically%20investing%20in%20community%20needs',
            description: (
                <>
                    <p><b>Communities must lead, sectors must collaborate, investments must be strategic, data must guide action, and commitment must be long-term.</b></p>
                    <h5>Key Points</h5>
                    <ul>
                        <li><b>Community-Driven Leadership:</b> Community members should be the driving force behind efforts to improve population health, as they best understand their own needs and priorities.</li>
                        <li><b>Cross-Sector Collaboration:</b> Achieving health equity requires collaboration across healthcare, public health, and social sectors, with open communication and shared decision-making.</li>
                        <li><b>Strategic Investment:</b> Rather than focusing on short-term projects, prioritize sustainable investment in community assets and resources that address the root causes of health disparities.</li>
                        <li><b>Data-Driven Strategies:</b> Utilize data to identify specific community needs, track progress, and guide decision-making for maximum impact.</li>
                        <li><b>Long-Term Commitment:</b> Systemic change in health outcomes requires a sustained commitment to addressing social determinants of health, not isolated programs.</li>
                    </ul>
                </>
            )
        },
        {
            title: 'How Trusted Local Entry Points Are Key to Improving Community Health',
            url: 'https://jamanetwork.com/journals/jama-health-forum/fullarticle/2804022',
            description: (
                <>
                    <p><b>This paper argues that trusted community-based organizations are crucial for bridging the gap between healthcare and social services, ultimately improving health outcomes for underserved populations.</b></p>
                    <h5>Key Points</h5>
                    <ul>
                        <li><b>Close collaboration between health systems and social service organization is necessary</b> for improving individual and community health.</li>
                        <li>A trusted entry point is a person or organization that can connect people with health and social services.</li>
                        <li><b>Some CBOs can act as trusted entry points because they are seen as credible by the community.</b></li>
                        <li>Strong relationships among community institutions are important for creating and expanding local entry points.</li>
                        <li>The federal government can help by providing clear guidance on what community hubs and CBOs can do, and by helping to fund them.</li>
                        <li><b>Community hubs and CBOs need good data collection and sharing capabilities, as well as well-developed referral systems.</b></li>
                    </ul>
                </>
            )
        },
        {
            title: 'Putting the ‘value’ in value-based payments',
            url: 'https://thehealthcareblog.com/blog/2024/02/23/putting-the-value-in-value-based-payments/',
            description: 'Discusses the issue of high healthcare spending in the US despite not achieving good health outcomes. It proposes that we focus more on social determinants of health, like housing and employment, to improve health outcomes. The author argues that this could be achieved by rewarding providers for achieving social outcomes, as well as patient-reported outcomes.'
        },
        {
            title: 'Recoding America',
            url: 'https://us.macmillan.com/books/9781250266774/recodingamerica',
            description: 'In her book, Jennifer Pahlka argues that government suffers from a rigid, outdated culture where top-down policymaking ignores implementation complexities, yet new approaches focused on people-centered technology hold the key to recoding government for better services.'
        },
        {
            title: 'Underestimated Challenges for Social Care Initiatives — Regulatory Compliance',
            url: 'https://www.nejm.org/doi/full/10.1056/NEJMp2313177',
            description: (
                <>
                    <p><b>This paper explores the challenges health plans face in implementing social care programs due to complex and evolving regulations.</b></p>
                    <h5>Key Points</h5>
                    <ul>
                        <li>Regulatory complexity is a major hurdle for social care programs. There are many different rules and requirements that health plans need to follow in order to offer social care services. These rules can be unclear and constantly changing, which makes it difficult for plans to know what is and is not allowed.</li>
                        <li>Uncertainty about compliance can lead to plans avoiding social care altogether. Because the rules are so complex and there is a risk of getting penalized for non-compliance, some health plans may decide not to offer social care services at all.</li>
                        <li>Clearer guidance from policymakers is needed. In order to encourage more health plans to offer social care services, policymakers need to provide clearer guidance on what is and is not allowed. This would help to reduce the risk of non-compliance and make it easier for plans to design and implement social care programs.</li>
                    </ul>
                </>
            )
        },
        {
            title: '“More than just checking the box”: community-based organizations on their role in Medicaid redesigns',
            url: 'https://academic.oup.com/healthaffairsscholar/article/1/5/qxad060/7378812',
            description: (
                <>
                    <p><b>This article examines the role of community-based organizations (CBOs) in Medicaid programs in New York and Massachusetts. It analyzes feedback from CBOs to highlight their experiences and potential for improvement.</b></p>
                    <h5>Key Points</h5>
                    <ul>
                        <li>CBOs raised concerns about funding, timing, and the flow of payments.</li>
                        <li>CBOs suggested improvements for better partnerships between CBOs and health care providers.</li>
                        <li>The article emphasizes the need for better financial support and clearer guidelines for CBO participation in Medicaid redesigns.</li>
                    </ul>
                </>
            )
        }
    ]
  },
  {
    id: 'fqhc',
    navTitle: 'FQHC/Community Health Center',
    title: 'FQHC/Community Health Center',
    intro: 'FQHCs/Community Health Centers play a vital role in providing healthcare to vulnerable populations, often at little or no cost to patient. However, their participation in value-based payment models is hindered by funding and reimbursement challenges. Despite this, they demonstrate cost-efficient contributions to healthcare and are essential components of the social safety net. Understanding their economic impact, funding sources, and financial costs is crucial for optimizing their effectiveness. Additionally, community care hubs offer potential for enhancing health outcomes by centralizing administrative functions and fostering partnerships with community-based organizations. Clarifying Medicaid payment policies for FQHCs is essential for ensuring their sustainability and effectiveness in delivering care to underserved communities.',
    resources: [
        {
            title: 'Community Health Centers and Value-Based Payments',
            url: 'https://ldi.upenn.edu/our-work/research-updates/community-health-centers-and-value-based-payment/',
            description: (
                <>
                    <p><b>The article provides an examination of how Community Health Centers (CHCs) are funded and reimbursed, and discusses their role within the landscape of value-based payment.</b></p>
                    <h5>Key Points</h5>
                    <ul>
                        <li>CHCs are a bedrock of the social safety net in the United States, providing care to vulnerable people in their communities, often for little or no cost to them.</li>
                        <li>CHCs operate through funding streams and reimbursement mechanisms that pose challenges to participating in newer forms of value-based payment.</li>
                        <li>This issue brief provides a snapshot of CHCs and the people they serve, how they currently are funded and reimbursed, how they fit into the landscape of value-based payment, and how alternative payment policies can align with their mission and mandate.</li>
                    </ul>
                </>
            )
        },
        {
            title: 'Economic Impact of Community Health Centers in the United States',
            url: 'https://www.nachc.org/wp-content/uploads/2023/06/Economic-Impact-of-Community-Health-Centers-US_2023_final.pdf',
            description: 'Community Health Centers provide vital and cost-efficient healthcare to millions of people throughout the United States. This report presents national and state-level results of an original analysis of Community Health Centers’ economic impact.'
        },
        {
            title: 'Federally Qualified Health Centers (FQHCs) and the Health Center Program',
            url: 'https://www.ruralhealthinfo.org/topics/federally-qualified-health-centers#fqhc-benefits',
            description: 'A good 101 look at FQHC/Community Health Centers.'
        },
        {
            title: 'Financial Costs of FQHCs',
            url: 'https://data.hrsa.gov/tools/data-reporting/program-data/national/table?tableName=8A&year=2022',
            description: 'Breakdown of financial Costs at community health centers.'
        },
        {
            title: 'Improving Health And Well-Being Through Community Care Hubs',
            url: 'https://www.healthaffairs.org/content/forefront/improving-health-and-well-being-through-community-care-hubs',
            description: (
                <>
                    <p><b>This article emphasizes the importance of community care hubs in enhancing health outcomes by centralizing administrative functions, facilitating partnerships between community-based organizations (CBOs) and healthcare providers, and addressing social determinants of health through coordinated efforts</b></p>
                    <h5>Key Points</h5>
                    <ul>
                        <li>Community care hubs are entities that centralize administrative functions and connect community-based organizations (CBOs) with healthcare providers.</li>
                        <li>They can improve care coordination, data sharing, and service delivery.</li>
                        <li>There are funding opportunities for hubs through federal grants, Medicaid programs, and philanthropic sources.</li>
                    </ul>
                </>
            )
        },
        {
            title: 'Medicaid Payment Policy for Federally Qualified Health Centers',
            url: 'https://www.macpac.gov/wp-content/uploads/2017/12/Medicaid-Payment-Policy-for-Federally-Qualified-Health-Centers.pdf',
            description: 'Understanding the nuances of community health center payments.'
        }
    ]
  },
  {
    id: 'trends',
    navTitle: 'Trends',
    title: 'Medicaid Customer Problems & Trends',
    intro: 'Insights from the 2023 Annual Medicaid MCO Survey provide a comprehensive understanding of managed care, covering areas like high-risk care coordination. However, challenges arise, as seen in "As Medicaid Shrinks, Clinics for the Poor Are Trying to Survive," which discusses financial strains on clinics serving low-income populations due to shrinking enrollment. Articles on digital health solutions and innovative healthcare programs offer potential avenues to address Medicaid\'s complex needs. Understanding these trends is crucial for adapting healthcare delivery to meet the evolving needs of Medicaid beneficiaries effectively.',
    resources: [
        {
            title: '2023 Annual Medicaid MCO Survey',
            url: 'https://medicaidinnovation.org/wp-content/uploads/2023/11/2023-MCO-FactSheets-Combined-111523.pdf',
            description: 'The 2023 Annual Medicaid MCO Survey examines findings from a survey of Medicaid managed care organizations (MCOs) across the United States. The survey delves into various aspects including high-risk care coordination, alternative payment models, pharmacy, behavioral health, and more. The aim is to provide Medicaid stakeholders with a comprehensive understanding of the national landscape of Medicaid managed care.'
        },
        {
            title: 'As Medicaid Shrinks, Clinics for the Poor Are Trying to Survive',
            url: 'https://www.nytimes.com/2024/02/24/health/medicaid-loss-clinics.html',
            description: (
                <>
                    <p><b>The end of a pandemic-era policy that barred states from pushing people off Medicaid is threatening the financial stability of the U.S. safety net.</b></p>
                    <h5>Key Points</h5>
                    <ul>
                        <li>Medicaid enrollment is shrinking dramatically post-pandemic, with millions losing coverage.</li>
                        <li>Clinics serving low-income populations are facing financial hardships due to lost Medicaid payments.</li>
                        <li>Patients are struggling to afford care, impacting their health and adding financial strain to the overall healthcare system.</li>
                    </ul>
                </>
            )
        },
        {
            title: 'Cityblock Health',
            url: 'https://www.notboring.co/p/cityblock-health',
            description: 'A great write-up on Cityblock.'
        },
        {
            title: 'Health Care Hotspotting — A Randomized, Controlled Trial',
            url: 'https://www.nejm.org/doi/full/10.1056/NEJMsa1906848',
            description: (
                <>
                    <p><b>A follow-up to the hot-spotter article. Some have argued that this study was not long enough to measure true impact.</b></p>
                    <h5>Key Points</h5>
                    <ul>
                        <li>This is a study on a healthcare program designed for superutilizers of healthcare services.</li>
                        <li>The program aimed to reduce hospital readmission rates.</li>
                        <li>The study found that the program did not have an effect on reducing readmission rates.</li>
                        <li>More research is required to assess the program effectiveness.</li>
                    </ul>
                </>
            )
        },
        {
            title: 'Revolutionizing Medicaid Care Through Digital Health',
            url: 'https://www.7wireventures.com/perspectives/empowering-underserved-americans-revolutionizing-medicaid-care-through-digital-health-solutions/',
            description: (
                <>
                    <p><b>This article explores how digital health solutions can empower underserved Americans by improving access to Medicaid care through remote options, language assistance, and educational resources.</b></p>
                    <h5>Key Points</h5>
                    <ul>
                        <li>Medicaid covers a diverse population with complex needs. Many beneficiaries struggle to access care due to systemic barriers.</li>
                        <li>Digital health solutions can help address these challenges by providing culturally sensitive care, multilingual platforms, and telehealth options.</li>
                        <li>The future of Medicaid is likely to involve an increase in value-based care, focusing on prevention and chronic condition management.</li>
                        <li>There will also be a growing emphasis on addressing social determinants of health and collaborating with community-based organizations.</li>
                    </ul>
                </>
            )
        },
        {
            title: 'The Hot Spotters',
            url: 'https://www.newyorker.com/magazine/2011/01/24/the-hot-spotters',
            description: (
                <>
                    <p><b>A now famous article about patients who are "hot-spotters."</b></p>
                    <h5>Key Points</h5>
                    <ul>
                        <li>This article is about finding the most expensive patients in a healthcare system.</li>
                        <li>It discusses a doctor named Jeff Brenner who identified the most expensive 1% of patients in Camden, New Jersey.</li>
                        <li>These patients accounted for one third of the city’s healthcare costs.</li>
                        <li>Brenner helped them get better care and reduced their healthcare costs.</li>
                        <li>The article also discusses the challenges of implementing these changes.</li>
                    </ul>
                </>
            )
        },
        {
            title: 'Unwinding the opportunity: Medicaid’s digital health moment',
            url: 'https://rockhealth.com/insights/unwinding-the-opportunity-medicaids-digital-health-moment/',
            description: (
                <>
                    <p><b>Rock Health article explores the potential for digital health solutions within Medicaid. Despite challenges, the large customer base and increasing interest make it an attractive market.</b></p>
                    <h5>Key Points</h5>
                    <ul>
                        <li>Medicaid is a large market with unmet needs, but it is complex and has low reimbursement rates.</li>
                        <li>Digital health startups can help Medicaid by extending provider capacity, optimizing enrollee engagement, and strategizing with data-driven insights.</li>
                        <li>Some promising areas of innovation include re-enrollment support, virtual and hybrid care delivery, and specialized care for high-need populations.</li>
                        <li>Medicaid programs are increasingly interested in preventative care and value-based care arrangements.</li>
                    </ul>
                </>
            )
        }
    ]
  },
  {
    id: 'lessons',
    navTitle: 'Lessons From Founders',
    title: 'Lessons From Founders',
    resources: [
        {
            title: 'Jessica Chao: Lessons from founding a venture-backed health equity startup',
            url: 'https://chaojessica.medium.com/lessons-from-founding-a-venture-backed-health-equity-startup-9d80d43a3f9a',
            description: 'Jessica discusses the difficulties of finding a product-market fit. This is the most helpful article I have read. Instead of going through a lot of pain, please study this article.'
        },
        {
            title: 'Shutting Down a Health Tech Startup: CEO of Astarte Medical Tells All',
            url: 'https://www.youtube.com/watch?v=QsQBOpU2ugA',
            description: 'I am technically cheating with this one because it is not Medicaid focused, but Tracy provides honest reflections that all founders can learn from.'
        }
    ]
  },
  {
    id: 'people',
    navTitle: 'Podcasts, Channels, Newsletters to Follow',
    title: 'Podcasts/Channels/Newsletters to Follows',
    resources: [
        {
            title: 'The Other 80 by Claudia Williams',
            url: 'https://www.theother80.com',
            description: 'This is a must-listen podcast about the things that help keep people healthy beyond traditional medical care, like housing, social connections, and food, as well as the cutting-edge policies, research, and programs supporting whole-person health.'
        }
    ]
  },
  {
    id: 'investors-focusing-on-medicaid',
    navTitle: 'Investors Focusing on Medicaid',
    title: 'Investors Focusing on Medicaid',
    investors: [
        { name: 'Anna Fagin', fund: 'Town Hall Ventures', url: 'https://www.linkedin.com/in/anna-fagin-a1a51657?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAwAKzYB5HGs7rS6xg0UgKN7QqEbiXf8NKM&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BNNPp3o0pTXaV%2BxkxnLLwgQ%3D%3D' },
        { name: 'Dana Sun', fund: 'Laerdal Million Lives Fund', url: 'https://www.linkedin.com/in/danasun8/' },
        { name: 'Katie Drasser', fund: 'Rock Health', url: 'https://www.linkedin.com/in/katiedrasser/' },
        { name: 'Rebecca Mitchell', fund: 'ViVe Collective', url: 'https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAAB2fv4Bl4N79IAKdezkBln3Fibs50YazNc&keywords=rebecca%20mitchell%2C%20md&origin=RICH_QUERY_SUGGESTION&position=0&searchId=8b84af5b-c0a0-4675-82ed-c8822a6f2fee&sid=%2CdE&spellCorrectionEnabled=false' },
        { name: 'Saumitra Thakur', fund: 'MedMountain', url: 'https://www.linkedin.com/in/saumitrathakur?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAALjpoQBtrsIvvkg3LIpwbDsGy-pFvIR26A&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bq%2F5t7Wl%2FQFer9gLCV%2FAsxw%3D%3D' }
    ]
  }
];
