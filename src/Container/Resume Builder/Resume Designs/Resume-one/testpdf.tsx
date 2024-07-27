import React, { useEffect, useLayoutEffect } from "react";
import {
  Document,
  Page,
  Text,
  StyleSheet,
  PDFDownloadLink,
  PDFViewer,
  View,
  Image,
  Font,
  Link,
} from "@react-pdf/renderer";
import WATERMARK from "@Assets/images/watermark/watermark.png";
import { useSelector } from "react-redux";

function Testpdf({handlePayment}) {
  const { resumeDataArray } = useSelector(
    (state: any) => state.ResumeBuilderSlice
  );



  useLayoutEffect(() => {
    Font.register({
      family: "Open Sans",
      fonts: [
        {
          src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-700.ttf",
          fontStyle: "normal",
          fontWeight: 700,
        },
        {
          src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-100.ttf",
          fontStyle: "normal",
          fontWeight: 100,
        },
      ],
    });
  }, []);

  const styles = StyleSheet.create({
    page: {
      position: "relative",
      flexDirection: "column",
      backgroundColor: "#fff",
      padding: 20,
      fontFamily: "Open Sans",
    },

    // Common Styles ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    section: {
      marginBottom: 15,
    },

    sectionHeadings: {
      fontWeight: 700,
      fontSize: 10,
      width: "100%",
      borderBottom: "1px",
    },

    sectionTitlesAndDate: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      flexDirection: "row",
    },

    sectionTitles: {
      fontWeight: 700,
      fontSize: 10,
      paddingTop: 10,
      // width:'50%'
    },

    sectionText: {
      // fontWeight: 700,
      fontSize: 10,
      paddingTop: 5,
    },

    sectionDate: {
      color: "gray",
      fontSize: 9,
      paddingTop: 10,
      // width:'50%'
    },
    // Common Styles ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // name, designation, address section ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    blockOne: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      marginBottom: "20px",
    },

    nameOne: {
      textTransform: "capitalize",
      fontSize: 18,
      fontWeight: 700,
      marginBottom: "-10px",
    },

    desigOne: {
      textTransform: "capitalize",
      fontSize: 19,
      // fontWeight: 100,
      marginBottom: "-5px",
    },

    addOne: {
      // textTransform: "capitalize",
      fontSize: 10,
      // fontWeight: 300 ,
      textAlign: "center",
      paddingLeft: "50px",
      paddingRight: "50px",
      textDecoration: "underline",
    },

    // name, designation, address section ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // Skill Design ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    skillDesign: {
      display: "flex",
      flexDirection: "row",
      gap: "10px",
      marginTop: "10px",
      flexWrap: "wrap",
    },

    skillText: {
      fontSize: 10,

      textTransform: "capitalize",
      backgroundColor: "#a8a8a8",
      paddingHorizontal: "10px",
      paddingVertical: "3px",
      borderRadius: "30px",
    },

    // Skill Design ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // Certificate Design ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    certificateText: {
      fontSize: 10,
      textTransform: "capitalize",
      textDecoration: "none",
      color: "black",
    },

    certificateItem: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 2,
    },
    certificateIndex: {
      marginRight: 4,
      fontSize: 10,
      color: "black",
    },

    // Certificate Design ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    backgroundImage: {
      position: "absolute",
      width: "90%",

      top: "20%",
      left: "10%",
      zIndex: -1,
    },
  });

  const formatDateString = (dateStr) => {
    // Parse the input date string
    const date = new Date(dateStr);

    // Define an array of month names
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Extract the month and year from the date
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    // Return the formatted date string
    return `${month} ${year}`;
  };

  const Doc = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* <Image src={WATERMARK} style={styles.backgroundImage} /> */}

        <View style={styles.blockOne}>
          {/* <Text style={styles.nameOne}>namejashmfvh</Text> */}
          <Text style={styles.nameOne}>{resumeDataArray?.name}</Text>
          {/* <Text style={styles.desigOne}>Designation</Text> */}
          <Text style={styles.addOne}>
            {resumeDataArray?.email} | {resumeDataArray?.phoneNumber} |{" "}
            {resumeDataArray?.address}
          </Text>
        </View>

        {resumeDataArray?.bio?.length !== 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionHeadings}>ABOUT</Text>

            <View style={{ gap: "10px" }}>
              <Text style={styles.sectionText}>{resumeDataArray?.bio}</Text>
            </View>
          </View>
        )}

        {resumeDataArray?.education?.length !== 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionHeadings}>EDUCATION</Text>

            <View style={{ gap: "5px" }}>
              {resumeDataArray?.education?.map(
                (
                  { institute_name, course_txt, start_date, end_date, result },
                  index
                ) => {
                  return (
                    <View key={index}>
                      <View style={styles.sectionTitlesAndDate}>
                        <Text style={styles.sectionTitles}>
                          {institute_name}
                        </Text>
                        {start_date && end_date && (
                          <Text style={styles.sectionDate}>
                            {formatDateString(start_date)} -{" "}
                            {formatDateString(end_date)}
                          </Text>
                        )}
                      </View>
                      <Text style={styles.sectionText}>
                        {course_txt}
                        {result ? `, ${result}` : ""}
                      </Text>
                    </View>
                  );
                }
              )}
            </View>
          </View>
        )}

        {resumeDataArray?.experience?.length !== 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionHeadings}>WORK EXPERIENCE</Text>

            <View style={{ gap: "10px" }}>
              {resumeDataArray?.experience?.map(
                (
                  {
                    designation,
                    organization,
                    start_date,
                    end_date,
                    responsibilities,
                  },
                  index
                ) => {
                  return (
                    <View key={index}>
                      <View style={styles.sectionTitlesAndDate}>
                        <Text style={styles.sectionTitles}>{designation}</Text>
                        {start_date && end_date && (
                          <Text style={styles.sectionDate}>
                            {formatDateString(start_date)} -{" "}
                            {formatDateString(end_date)}
                          </Text>
                        )}
                      </View>
                      <Text style={styles.sectionText}>{organization}</Text>
                      <Text style={styles.sectionText}>{responsibilities}</Text>
                    </View>
                  );
                }
              )}
            </View>
          </View>
        )}

        {resumeDataArray?.skill?.length !== 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionHeadings}>SKILL</Text>

            <View style={styles.skillDesign}>
              {resumeDataArray?.skill?.map((item, index) => {
                return (
                  <Text key={index} style={styles.skillText}>
                    {item}
                  </Text>
                );
              })}
            </View>
          </View>
        )}

        {resumeDataArray?.certificate?.length !== 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionHeadings}>Certifications</Text>

            <View style={styles.skillDesign}>
              {resumeDataArray?.certificate?.map(({ title, url }, index) => (
                <View key={index} style={styles.certificateItem}>
                  <Text style={styles.certificateIndex}>{index + 1}.</Text>
                  <Link src={url} style={styles.certificateText}>
                    {title}
                  </Link>
                </View>
              ))}
            </View>
          </View>
        )}

        {resumeDataArray?.language?.length !== 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionHeadings}>Languages</Text>

            <View style={styles.skillDesign}>
              {resumeDataArray?.language?.map((item, index) => (
                <View key={index} style={styles.certificateItem}>
                  <Text style={styles.certificateIndex}>{index + 1}.</Text>
                  <Text style={styles.certificateText}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* {
          <View style={styles.section}>
            <Text style={styles.sectionHeadings}>Personal Details</Text>

            <Text
              style={{
                fontSize: 10,
                textTransform: "capitalize",
                textDecoration: "none",
                color: "black",
                paddingTop:'10px'
              }}
            >
              Date of Birth:{" 14/02/1988 "}
            </Text>
          </View>
        } */}
      </Page>
    </Document>
  );

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center ">
      <div className=" w-full flex justify-end mb-3">
        <PDFDownloadLink document={<Doc />} fileName="somename.pdf">
          {({ blob, url, loading, error }) => (
            <button className="buttonResume">
              {loading ? "Loading document..." : "Download now!"}
            </button>
          )}
        </PDFDownloadLink>
      </div>

      <div className=" w-full h-[100%] " onContextMenu={handleContextMenu}>
        <PDFViewer width={"100%"} height={"100%"} showToolbar={false}>
          <Doc />
        </PDFViewer>
      </div>
    </div>
  );
}

export default Testpdf;
