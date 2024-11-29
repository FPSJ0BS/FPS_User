import { useEffect, useLayoutEffect } from "react";
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
import WATERMARK from "@Assets/images/watermark/watermark-gray.png";
import { useSelector } from "react-redux";

function ResumeTwo({handlePayment}) {
  const { resumeDataArray, paymentStatus } = useSelector(
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
      backgroundColor: "#111111",
      paddingLeft: 60,
      paddingTop: 60,
      paddingRight: 30,
      paddingBottom: 30,
      fontFamily: "Open Sans",
      gap: 0,
    },

    // Top Section Open ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    sectionTop: {
      // backgroundColor:'green',
      height: "20%",
      width: "100%",
      display: "flex",
      flexDirection: "row",
    },

    topLeft: {
      width: "30%",
      height: "100%",
    },

    topRight: {
      width: "70%",
      height: "100%",
      gap: 10,
    },

    nameStyle: {
      color: "white",
      fontWeight: 700,
      textTransform: "capitalize",
      fontSize: 15,
    },

    imageSection: {
      height: "100px",
      width: "100px",
      backgroundColor: "green",
      borderRadius: "10px",
    },

    bio: {
      paddingBottom: 20,
      fontSize: 8,
      color: "white",
    },
    // Top Section Close ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // Bottom Section Open ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    sectionBottom: {
      // backgroundColor: "blue",
      height: "80%",
      width: "100%",
      flexDirection: "row",
    },

    bottomLeft: {
      height: "100%",
      width: "60%",
      paddingRight: "35px",
      // backgroundColor: "purple",
    },

    bottomRight: {
      height: "100%",
      width: "40%",
      
      // backgroundColor: "white",
    },

    // Certificates

    certificateText: {
      fontSize: 8,
      textTransform: "capitalize",
      textDecoration: "none",
      color: "white",
    },

    certificateItem: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 2,
    },
    certificateIndex: {
      marginRight: 4,
      fontSize: 8,
      color: "white",
    },
    // Bottom Section Close ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // Common Styles ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    headingStyle: {
      color: "#878787",
      textTransform: "capitalize",
      fontSize: 9,
    },

    // Common Styles ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    backgroundImage: {
      position: "absolute",
      width: "90%",
      top: "30%",
      left: "15%",
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

  const getYearFromDate = (dateString) => dateString?.split("-")[0];

  const Doc = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        {paymentStatus &&  <Image src={WATERMARK} style={styles.backgroundImage} />}

        {/* Top Section */}
        <View style={styles.sectionTop}>
          <View style={styles.topLeft}>
          <Image
            src={`${resumeDataArray?.profileImage}`}
            style={{
              width: "70%",
              borderRadius: "10%",
            }}
          />
          </View>
          <View style={styles.topRight}>
            <Text style={styles.nameStyle}>{resumeDataArray?.name}</Text>
           
            <Text style={styles.bio}>
              {resumeDataArray?.bio}
            </Text>
          </View>
        </View>

        {/* Bottom Section */}
        <View style={styles.sectionBottom}>
          <View style={styles.bottomLeft}>
            <Text style={{ paddingBottom: 10, fontSize: 9, color: "white" }}>
              {resumeDataArray?.phoneNumber}
            </Text>

            <Text style={{ paddingBottom: 20, fontSize: 9, color: "white" }}>
              {resumeDataArray?.email}
            </Text>

            {/* Experiences */}
            {resumeDataArray?.experience?.length !== 0 && (
              <View>
                <Text style={styles.headingStyle}>Experiences:</Text>

                <View
                  style={{
                    flexDirection: "column",
                    marginTop: "20px",
                    gap: 15,
                  }}
                >
                  {resumeDataArray?.experience?.map(
                    (
                      {
                        designation,
                        start_date,
                        end_date,
                        organization,
                        responsibilities,
                      },
                      index
                    ) => {
                      return (
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                          key={index}
                        >
                          <View style={{ width: "35%" }}>
                            <Text style={{ color: "white", fontSize: 8 }}>
                              {getYearFromDate(start_date)} -{" "}
                              {getYearFromDate(end_date)}
                            </Text>
                          </View>

                          <View style={{ width: "66%" }}>
                            <Text
                              style={{
                                color: "white",
                                fontSize: 8,
                                fontWeight: "bold",
                              }}
                            >
                              {designation}
                            </Text>
                            <Text style={{ color: "white", fontSize: 7 }}>
                              {organization}
                            </Text>
                            <Text style={{ color: "white", fontSize: 7 }}>
                              {responsibilities}
                            </Text>
                          </View>
                        </View>
                      );
                    }
                  )}
                </View>
              </View>
            )}

            {/* Education */}
            {resumeDataArray?.education?.length !== 0 && (
              <View style={{ marginTop: "20px" }}>
                <Text style={styles.headingStyle}>Education:</Text>

                <View
                  style={{
                    flexDirection: "column",
                    marginTop: "20px",
                    gap: 15,
                  }}
                >
                  {resumeDataArray?.education?.map(
                    (
                      {
                        institute_name,
                        start_date,
                        end_date,
                        course_txt,
                        result,
                      },
                      index
                    ) => {
                      return (
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                          key={index}
                        >
                          <View style={{ width: "35%" }}>
                            <Text style={{ color: "white", fontSize: 8 }}>
                              {getYearFromDate(start_date)} -{" "}
                              {getYearFromDate(end_date)}
                            </Text>
                          </View>

                          <View style={{ width: "66%" }}>
                            <Text
                              style={{
                                color: "white",
                                fontSize: 8,
                                fontWeight: "bold",
                              }}
                            >
                              {institute_name}
                            </Text>
                            <Text style={{ color: "#acacac", fontSize: 8 }}>
                              {course_txt}
                              {result ? `, ${result}` : ""}
                            </Text>
                          </View>
                        </View>
                      );
                    }
                  )}
                </View>
              </View>
            )}

            {/* Skills */}
            {resumeDataArray?.skill?.length !== 0 && (
              <View style={{ marginTop: "20px" }}>
                <Text style={styles.headingStyle}>Skills:</Text>

                <View
                  style={{
                    flexDirection: "row",
                    marginTop: "20px",
                    gap: 5,
                    flexWrap:'wrap'
                  }}
                >
                  {resumeDataArray?.skill?.map((item, index) => {
                    return (
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                        key={index}
                      >
                        <Text
                          style={{
                            fontSize: 7,

                            textTransform: "capitalize",
                            backgroundColor: "#a8a8a8",
                            paddingHorizontal: "5px",
                            paddingVertical: "3px",
                            borderRadius: "30px",
                          }}
                        >
                          {item}
                        </Text>
                      </View>
                    );
                  })}
                </View>
              </View>
            )}
          </View>


          <View style={styles.bottomRight}>


            {/* Certificates */}
            {resumeDataArray?.certificate?.length !== 0 && (
              <View style={{ marginTop: "20px" }}>
                <Text style={styles.headingStyle}>Certificates:</Text>

                <View
                  style={{
                    flexDirection: "column",
                    marginTop: "20px",
                    gap: 5,
                  }}
                >
                  {resumeDataArray?.certificate?.map(
                    ({ title, url }, index) => {
                      return (
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                          key={index}
                        >
                          <View key={index} style={styles.certificateItem}>
                            <Text style={styles.certificateIndex}>
                              {index + 1}.
                            </Text>
                            <Link src={url} style={styles.certificateText}>
                              {title}
                            </Link>
                          </View>
                        </View>
                      );
                    }
                  )}
                </View>
              </View>
            )}

             {/* Languages */}
             {resumeDataArray?.language?.length !== 0 && (
              <View style={{ marginTop: "20px" }}>
                <Text style={styles.headingStyle}>Languages:</Text>

                <View
                  style={{
                    flexDirection: "column",
                    marginTop: "20px",
                    gap: 5,
                  }}
                >
                  {resumeDataArray?.language?.map(
                    (item, index) => {
                      return (
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                          key={index}
                        >
                          <View key={index} style={styles.certificateItem}>
                            <Text style={styles.certificateIndex}>
                              {index + 1}.
                            </Text>
                            <Text style={styles.certificateText}>
                              {item}
                            </Text>
                          </View>
                        </View>
                      );
                    }
                  )}
                </View>
              </View>
            )}


          </View>

          



        </View>


      </Page>
    </Document>
  );

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center ">
      <div className=" w-full flex justify-between mb-3">
     {paymentStatus &&  <button className=" px-4 rounded-lg bg-[#da3682] text-white font-semibold leading-3" onClick={() => handlePayment()}>Remove Watermark</button>}

        <PDFDownloadLink document={<Doc />} fileName="somename.pdf">
          {({ blob, url, loading, error }) => (
            <button className="buttonResume">
              {loading ? "Loading document..." : "Download now! "}
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

export default ResumeTwo;
