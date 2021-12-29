import React from "react";
import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { aboutScreenStyles } from "./About.styles";
import main from "../../../assets/main.jpg";
import lab from "../../../assets/lab.jpg";
import reception from "../../../assets/reception.jpg";
import AppText from "../../components/AppText/AppText";
import ManagerCard from "../../components/ManagerCard/ManagerCard";
import waqar from "../../../assets/staff/sir-waqar-min.jpg";
import murad from "../../../assets/staff/sir-murad-min.jpg";
import zubaria from "../../../assets/staff/mam-zubaria-min.jpg";
import sajjad from "../../../assets/staff/sir-sajjad.jpeg";
import bilal from "../../../assets/staff/sir-bilal-min.jpg";
import rukhsana from "../../../assets/staff/rukhsana-min.jpg";
import sehrish from "../../../assets/staff/sehrish-min.jpg";
import shumaila from "../../../assets/staff/shumaila-min.jpg";
import faiza from "../../../assets/staff/faiza-min.jpg";
import laiba from "../../../assets/staff/laiba-min.jpg";
import ammara from "../../../assets/staff/ammara-min.jpg";
import hamza from "../../../assets/staff/hamza-min.jpg";
import usman from "../../../assets/staff/usman-min.jpg";
import anum from "../../../assets/staff/anum-min.jpg";
import naila from "../../../assets/staff/naila-min.jpg";
import adnan from "../../../assets/staff/adnan-min.jpg";
import tariq from "../../../assets/staff/tariq-min.jpg";
import ahsan from "../../../assets/staff/ahsan-.jpeg";
import tahir from "../../../assets/staff/tahir-min.jpg";
import faizan from "../../../assets/staff/faizan-min.jpg";
import ahmad from "../../../assets/staff/ahmad.jpg";

const AboutScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={{ alignItems: "center" }}
      style={aboutScreenStyles.root}
    >
      <Image source={main} style={aboutScreenStyles.image} />
      <AppText variant={"h3"} font="Poppins" center>
        SO, WHO ARE WE?
      </AppText>
      <AppText
        variant={"subtitle"}
        font="Poppins"
        style={{ width: "98%", marginLeft: "2%" }}
        center
      >
        Genome Center for Molecular based Diagnostics and Research, a clinical
        Diagnostics facility located at Lahore, has State-of-the-art laboratory
        facilities and infrastructure that uses extremely sensitive and specific
        protocols to enable detection of low-level, early-stage infections as
        well as latest and most advanced technology for PCR, Routine and Special
        chemistry. GCMD houses RealTime PCR machines from Sacace Biotechnologies
        (Italy), Cepheid USA (SmartCycler II) and GenExpert, the most sensitive
        & specific FDA approved systems/technique for DNA/RNA detection and
        quantification currently available. For routine and special chemistry
        GCMD has systems from Roche and Biomeriex.
      </AppText>
      <AppText
        variant={"subtitle"}
        font="Poppins"
        style={{ width: "98%", marginLeft: "2%" }}
        center
      >
        The GCMD lab provides innovative and comprehensive Molecular
        Biology-based testing through highest standards of reliability,
        outstanding technology and professional competency to meet the needs of
        their customers and also maintains the quality system that conforms to
        the requirements of ISO 9001:2015 and applicable regulatory
        requirements. The GCMD is registered with Punjab Health Care Commission
        (PHC Registration No. R-26066) and also DAS (UK) certified Quality
        Management System as met the requirements of ISO 9001: 2015 (Certificate
        No. DAS 59297704/19/Q Rev: 001). GCMD was also ISO 9001: 2015 RICI
        Certified Lab. The Lab is also affiliated with Armed Forces Institute of
        Pathology (AFIP) and College of American Pathologist (CAP) for External
        Quality Assurance.
      </AppText>
      <Image source={reception} style={aboutScreenStyles.image} />
      <AppText
        variant={"subtitle"}
        font="Poppins"
        style={{ width: "98%", marginLeft: "2%" }}
        center
      >
        In the current scenario of novel coronavirus pandemic, a large number of
        COVID-19 suspected people need to be tested by the most sensitive and
        specific method like Real-Time PCR to minimize community transmission,
        therefore, GCMD has decided to extend the Real-Time PCR facility to the
        specific diagnosis of novel coronavirus 2019-nCoV/SARS-CoV-2 in
        clinical, suspected as well as for normal healthy Individuals (for
        certain purposes). GCMD has affiliation regarding Covi19 External
        Quality Assurance, from NIH Pakistan and LGC UK.
      </AppText>
      <AppText
        variant={"subtitle"}
        font="Poppins"
        style={{ width: "98%", marginLeft: "2%" }}
        center
      >
        GCMD has already been working with different Airlines for covid-19 PCR
        preflight testing as PIA, SALAM AIR, SERENE AIR, AIR ARABIA, FLY DUBAI,
        AIR BLUE, TURKISH AIRLINE, PEGASUS AIRLINE, ETIHAD AIR, EMIRATES, GULF
        AIR, QATAR AIR and OMAN AIR. GCMD assures high quality, timely and
        accurate testing and facilitation to the passengers through online
        reports having Bar-Codes so that they could be scanned anywhere. 27/7
        helplines are also open for passengers. Passengers could be entertained
        through home sampling or by our collection centers.
      </AppText>
      <Image source={lab} style={aboutScreenStyles.image} />
      <AppText
        variant={"subtitle"}
        font="Poppins"
        style={{ width: "98%", marginLeft: "2%", paddingBottom: 30 }}
        center
      >
        In the current scenario, where certain UAE states have demanded a Rapid
        PCR test, within a specific time frame and preferably within Airport
        premises, GCMD is honored to offering its services at international
        Airports i.e; Allama Iqbal International Airport Lahore and Faisalabad
        International Airport and Bacha Khan International Airport.
      </AppText>

      <View style={aboutScreenStyles.staff}>
        <AppText variant={"h3"} center font={"Poppins"}>
          STAFF
        </AppText>
        <AppText variant={"subtitle"} center font={"Poppins"}>
          AMAZING PEOPLE WE ARE BLESSED TO HAVE.
        </AppText>
        <ManagerCard name="WAQAR KHAN" image={waqar} designation={"CEO"} />
        <View style={aboutScreenStyles.line} />
        <ManagerCard
          name="MURAD KHAN"
          image={murad}
          designation={"LAB MANAGER"}
        />
        <ManagerCard
          name="SAJJAD KHAN"
          image={sajjad}
          designation={"HR MANAGER"}
        />
        <ManagerCard
          name="ZUBARIA REHMAN"
          image={zubaria}
          designation={"CONSULTANT MOLECULAR BIOLOGIST"}
        />
        <ManagerCard
          name="BILAL ARIF"
          image={bilal}
          designation={"IT MANAGER"}
        />
        <View style={aboutScreenStyles.line} />
        <AppText variant={"h5"} font={"Poppins"} center>
          Marketing
        </AppText>
        <View style={aboutScreenStyles.row}>
          <View style={aboutScreenStyles.person}>
            <Image source={tariq} style={aboutScreenStyles.personImg} />
            <AppText variant={"h6"} center font={"Poppins"}>
              TARIQ {"                    "} MASIH
            </AppText>
          </View>
        </View>
        <View style={aboutScreenStyles.line} />
        <AppText variant={"h5"} font={"Poppins"} center>
          Lab Technologists
        </AppText>
        <View style={aboutScreenStyles.row}>
          <View style={aboutScreenStyles.person}>
            <Image source={rukhsana} style={aboutScreenStyles.personImg} />
            <AppText variant={"h6"} center font={"Poppins"}>
              RUKHSANA {"                   "} BASHIR
            </AppText>
          </View>
          <View style={aboutScreenStyles.person}>
            <Image source={sehrish} style={aboutScreenStyles.personImg} />
            <AppText variant={"h6"} center font={"Poppins"}>
              SEHRISH {"                    "} AJMAL
            </AppText>
          </View>
        </View>
        <View style={aboutScreenStyles.row}>
          <View style={aboutScreenStyles.person}>
            <Image source={adnan} style={aboutScreenStyles.personImg} />
            <AppText variant={"h6"} center font={"Poppins"}>
              MUHAMMAD {"                    "} ADNAN
            </AppText>
          </View>
        </View>
        <View style={aboutScreenStyles.line} />
        <AppText variant={"h5"} font={"Poppins"} center>
          BioTechnologists
        </AppText>
        <View style={aboutScreenStyles.row}>
          <View style={aboutScreenStyles.person}>
            <Image source={shumaila} style={aboutScreenStyles.personImg} />
            <AppText variant={"h6"} center font={"Poppins"}>
              SHUMAILA {"                   "} ALI
            </AppText>
          </View>
          <View style={aboutScreenStyles.person}>
            <Image source={faiza} style={aboutScreenStyles.personImg} />
            <AppText variant={"h6"} center font={"Poppins"}>
              FAIZA {"                "} SHAFI
            </AppText>
          </View>
        </View>
        <View style={aboutScreenStyles.line} />
        <AppText variant={"h5"} font={"Poppins"} center>
          MicroBiologists
        </AppText>
        <View style={aboutScreenStyles.row}>
          <View style={aboutScreenStyles.person}>
            <Image source={ammara} style={aboutScreenStyles.personImg} />
            <AppText variant={"h6"} center font={"Poppins"}>
              AMMARA {"                   "} MUSHTAQ
            </AppText>
          </View>
          <View style={aboutScreenStyles.person}>
            <Image source={laiba} style={aboutScreenStyles.personImg} />
            <AppText variant={"h6"} center font={"Poppins"}>
              LAIBA {"                "} ISHAQ
            </AppText>
          </View>
        </View>
        <View style={aboutScreenStyles.line} />
        <AppText variant={"h5"} font={"Poppins"} center>
          Computer Operators
        </AppText>
        <View style={aboutScreenStyles.row}>
          <View style={aboutScreenStyles.person}>
            <Image source={usman} style={aboutScreenStyles.personImg} />
            <AppText variant={"h6"} center font={"Poppins"}>
              USMAN {"                   "} ARIF
            </AppText>
          </View>
          <View style={aboutScreenStyles.person}>
            <Image source={hamza} style={aboutScreenStyles.personImg} />
            <AppText variant={"h6"} center font={"Poppins"}>
              AMEER {"                "} HAMZA
            </AppText>
          </View>
        </View>
        <View style={aboutScreenStyles.row}>
          <View style={aboutScreenStyles.person}>
            <Image source={ahsan} style={aboutScreenStyles.personImg} />
            <AppText variant={"h6"} center font={"Poppins"}>
              MUHAMMAD {"                   "} AHSAN
            </AppText>
          </View>
          <View style={aboutScreenStyles.person}>
            <Image source={ahmad} style={aboutScreenStyles.personImg} />
            <AppText variant={"h6"} center font={"Poppins"}>
              AHMAD {"                   "} MUMTAZ
            </AppText>
          </View>
        </View>
        <View style={aboutScreenStyles.row}>
          <View style={aboutScreenStyles.person}>
            <Image source={anum} style={aboutScreenStyles.personImg} />
            <AppText variant={"h6"} center font={"Poppins"}>
              ANUM {"                   "} RAFIQ
            </AppText>
          </View>
          <View style={aboutScreenStyles.person}>
            <Image source={naila} style={aboutScreenStyles.personImg} />
            <AppText variant={"h6"} center font={"Poppins"}>
              NAILA {"                "} SHAFI
            </AppText>
          </View>
        </View>
        <View style={aboutScreenStyles.line} />
        <AppText variant={"h5"} font={"Poppins"} center>
          Courier
        </AppText>
        <View style={aboutScreenStyles.row}>
          <View style={aboutScreenStyles.person}>
            <Image source={faizan} style={aboutScreenStyles.personImg} />
            <AppText variant={"h6"} center font={"Poppins"}>
              MUHAMMAD {"                   "} FAIZAN
            </AppText>
          </View>
          <View style={aboutScreenStyles.person}>
            <Image source={tahir} style={aboutScreenStyles.personImg} />
            <AppText variant={"h6"} center font={"Poppins"}>
              MUHAMMAD {"                "} TAHIR
            </AppText>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AboutScreen;
