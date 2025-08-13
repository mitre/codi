---
id: get-started
---



# Get Started

## What is CODI?

The Community and Clinical Data Initiative (CODI) was developed to improve
health programs, clinical care, community services, and outcomes by connecting
clinical and community data. CODI is a model that brings together people,
processes and technology to build locally owned infrastructure that supports the
community to improve health. The CODI model has been implemented in three
communities focused on different use cases since 2018: Colorado (childhood
obesity), North Carolina (chronic disease), and Maryland (older adults,
nutrition programs, and evidence-based programs).  Based on lessons learned from
each implementation, the CODI model has evolved with modifications to address
key challenges and lessons learned. Learn more about each CODI implementation
and its supporting resources at [<span style={{color: '#3B8BFF'}}>Communities
Using CODI</span>](./communities-using-codi/index.md).

Central to the CODI model is the commitment to sharing resources for widespread
adoption and use. Any community can implement CODI. The CODI model is open
source, and its resources may be used and customized by any interested party to
support a CODI implementation.

## What organization types are required to implement CODI?

*  A health information exchange (HIE) interested in sharing, processing, and
analyzing social service screening and assessment data, which identify
individual needs like food insecurity, housing, and transportation, and the
programs or services provided by community-based organizations to address those
needs.
*  A community-based organization (CBO) providing programs or services that
impact health (such as home-delivered meals or falls prevention classes) that is
interested in sharing data to assess the impact of those programs and services
on clinical outcomes.

## What if my organization cannot partner with an HIE?

If you are unable to partner with an HIE, there is an alternative technical
approach to implement  CODI. The initial CODI model was conceptualized with a
distributed architecture where partners established a distributed network and
set up privacy-preserving record linkage (PPRL) to link records. The distributed
model requires the support of a linkage honest broker and a coordinating center
instead of an HIE. This model requires more resources to support and sustain
than the HIE-centric model described on this website. This approach was
implemented in Colorado and North Carolina and is described on the [<span
style={{color: '#3B8BFF'}}>Communities Using
CODI</span>](./communities-using-codi/index.md) page.

## Why should my organization implement CODI?

CODI empowers CBOs and HIEs to measure and demonstrate the impact of programs
and services provided outside of the clinic (e.g., meal delivery) by connecting
clinical and community data. The CODI model addresses three key barriers to
health information exchange between clinical organizations and CBOs:

1. CBOs (in general) are not HIPAA-covered entities and cannot see participant-protected health information (PHI).
* CBO partnership with HIEs enables access to aggregate clinical data for approved use cases
* HIEs provide data governance
2. CBOs have a variety of software and varying abilities to perform automated and standardized data exchange:
* HIEs provide templates that enable data ingestion from CBO systems that lack APIs (application programming interfaces)
3. Health care providers and CBOs use multiple screening instruments to assess
non-medical drivers of health (e.g., food insecurity, housing, and
transportation) and a variety of referral workflows to connect individuals with
services, which are often customized for target populations and priority topics.
* The CODI Data Model provides a reference to support harmonization efforts
* Participation in CODI identifies opportunities for harmonization across partners


The CODI model goes beyond data sharing to provide outcome measures
and visualization resources to drive population health improvements. 

## What processes do the CODI model and resources support?

At its core, implementing the CODI model is about building data
sharing partnerships and using data in new ways. The data flow that
the CODI model seeks to achieve is:

1. CBO extracts, normalizes, and securely transmits structured data from selected information systems to HIE
2. HIE ingests, transforms, and links social care data to clinical data
3. HIE determines how to calculate relevant clinical measures from clinical repository
4. HIE implements measure definitions to calculate outcomes
5. HIE builds dashboard
6. CBO uses dashboard to communicate impact of programs and services


[<span style={{color: '#3B8BFF'}}>Resources</span>](./codi-resources-by-phase/) have
been developed to support this design and are posted to this GitHub site
including:

*  CODI Data Model, which provides a common format to store and exchange data.
*  Outcome measure definitions, which provide detailed instructions on how to measure a number of health outcomes.
*  Reporting requirements and wireframes, which provide the specifications for how to build a reporting tool to measure impact of programs and services.



## What does a CBO need to get started?

To implement CODI, a CBO will need, at a minimum, the following:

*  Electronic systems that collect social service screening and assessment data
which identify individual needs (e.g., food insecurity, housing, and
transportation) and the programs or services provided to address those needs in
a structured format at the individual level. This includes screening responses,
program or service enrollment data, and program or service delivery data.
*  Consent to share individual data with HIEs for reporting purposes.
*  Permission to share data with the HIE and capacity to generate and transmit data in a structured format.
*  Sufficient individual level information to link program and service data to clinical data.
*  Staffing resources to extract and transform data to submit to the HIE.

If your organization is interested in moving forward with a CODI
implementation, check out the [<span style={{color: '#3B8BFF'}}>CODI
Resources</span>](./codi-resources-by-phase/index.md).



## What does an HIE need to get started?

To implement CODI, an HIE will need, at a minimum, the following:

*  An understanding of the region the partnering CBO serves and access to the necessary clinical data needed for computing the clinical outcomes of interest and making that information available in reporting tools.
*  An interest in receiving and working with program and service data from a CBO.
*  Resources to implement the CODI Data Model or match the components to your organization’s own data model.
*  Ability to ingest data from a CBO and update the reporting tool in a timely manner.
*  Reporting capabilities with analytic tools for the CBO to see their outcome and service data.

If your organization is interested in moving forward with a CODI
implementation, check out the [<span style={{color: '#3B8BFF'}}>CODI
Resources</span>](./codi-resources-by-phase/index.md).
