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
import StepIcon from "@Assets/Icons/Resume/_Step icon base black.png";
import EmailLIght from "@Assets/Icons/Resume/email light.png";
import PhoneLIght from "@Assets/Icons/Resume/Call light.png";
import AddressLight from "@Assets/Icons/Resume/address light.png";
import { useSelector } from "react-redux";

function ResumeThree({ handlePayment }) {
  const { resumeDataArray, paymentStatus } = useSelector(
    (state: any) => state.ResumeBuilderSlice
  );

  useEffect(() => {
    console.log("resumeDataArray", resumeDataArray);
  }, [resumeDataArray]);

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
      flexDirection: "row",
      backgroundColor: "#111214",
      paddingLeft: 25,
      paddingTop: 40,
      paddingRight: 40,
      paddingBottom: 30,
      fontFamily: "Open Sans",
      gap: 0,
    },

    // Common Styles ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    backgroundImage: {
      position: "absolute",
      width: "90%",
      top: "40%",
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

  const getYearFromDate = (dateString) => dateString.split("-")[0];

  const Doc = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        {paymentStatus && (
          <>
            {["40%", "10%", "80%"].map((top, index) => (
              <Image
                key={index}
                src={WATERMARK}
                style={{
                  position: "absolute",
                  width: "90%",
                  top: top,
                  left: "15%",
                  zIndex: -1,
                }}
              />
            ))}
          </>
        )}

        <View style={{ height: "100%", width: "30%" }}>
          <Text
            style={{
              color: "white",
              marginTop: "10px",
              fontWeight: "bold",
              textTransform: "capitalize",
              fontSize: "14px",
            }}
          >
            {resumeDataArray?.name}
          </Text>
          <Text
            style={{
              fontSize: "10px",
              paddingRight: "10px",
              paddingTop: "5px",
              color: "white",
            }}
          >
            {resumeDataArray?.bio}
          </Text>

          <View
            style={{
              borderTop: "1px",
              borderColor: "white",
              width: "130px",
              marginTop: "10px",
              flexDirection: "column",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "130px",
                gap: "5px",
                paddingTop: "10px",
              }}
            >
              <View
                style={{
                  width: "30%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image src={EmailLIght} style={{ width: "20px" }} />
              </View>
              <View style={{ width: "70%" }}>
                <Text style={{ color: "white", fontSize: "8px" }}>Email</Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: "9px",
                    fontWeight: "bold",
                  }}
                >
                  {resumeDataArray?.email}
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: "130px",
                gap: "5px",
                paddingTop: "10px",
              }}
            >
              <View
                style={{
                  width: "30%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image src={PhoneLIght} style={{ width: "20px" }} />
              </View>
              <View style={{ width: "70%" }}>
                <Text style={{ color: "white", fontSize: "8px" }}>
                  Phone Number
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: "9px",
                    fontWeight: "bold",
                  }}
                >
                  {resumeDataArray?.phoneNumber}
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: "130px",
                gap: "5px",
                paddingTop: "10px",
              }}
            >
              <View
                style={{
                  width: "30%",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Image src={AddressLight} style={{ width: "20px" }} />
              </View>
              <View style={{ width: "70%" }}>
                <Text style={{ color: "white", fontSize: "8px" }}>Address</Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: "9px",
                    fontWeight: "bold",
                  }}
                >
                  {resumeDataArray?.address}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              borderTop: "1px",
              borderColor: "white",
              width: "130px",
              marginTop: "10px",
            }}
          >
            <View
              style={{
                marginTop: "20px",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "5px",
              }}
            >
              {resumeDataArray?.language?.map((item, index) => {
                return (
                  <View key={index} style={{ gap: "5px" }}>
                    <Text
                      style={{
                        fontSize: "8px",
                        color: "white",
                        fontWeight: "semibold",
                        backgroundColor: "#1b1b1c",
                        paddingHorizontal: "10px",
                        paddingVertical: "5px",
                        borderRadius: "10px",
                        textTransform: "capitalize",
                      }}
                    >
                      {item}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        </View>

        <View style={{ height: "100%", width: "70%" }}>
          {resumeDataArray?.experience?.length !== 0 && (
            <View style={{ flexDirection: "row" }}>
              <Image
                src={StepIcon}
                style={{
                  width: "60px",
                  height: "60px",
                  marginLeft: "-20px",
                  marginTop: "-20px",
                }}
              />

              <View
                style={{
                  borderLeft: "2px",
                  borderLeftWidth: "1px",
                  borderColor: "#9b9c9c",
                  marginLeft: "-30.5px",
                  zIndex: -1,
                  paddingLeft: "30px",
                  width: "100%",
                  paddingBottom: `${
                    resumeDataArray?.education?.length === 0 ? "0px" : "20px"
                  }`,
                }}
              >
                <Text
                  style={{
                    paddingTop: "-5px",
                    color: "#e2e6ee",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  Experience
                </Text>
                <View
                  style={{
                    minHeight: "50px",
                    width: "100%",
                    backgroundColor: "#1b1b1c",
                    paddingVertical: "5px",
                    paddingHorizontal: "10px",
                    borderRadius: "6px",
                    marginTop: "10px",
                    gap: "20px",
                  }}
                >
                  {resumeDataArray?.experience?.map(
                    (
                      {
                        designation,
                        responsibilities,
                        organization,
                        start_date,
                        end_date,
                      },
                      index
                    ) => {
                      return (
                        <View key={index} style={{ gap: "5px" }}>
                          <Text
                            style={{
                              fontSize: "8px",
                              color: "#acb1c3",
                              fontWeight: "semibold",
                            }}
                          >
                            {designation}
                          </Text>

                          <View
                            style={{
                              flexDirection: "row",
                              justifyContent: "space-between",
                            }}
                          >
                            <Text
                              style={{
                                fontSize: "8px",
                                color: "#fff",
                                fontWeight: "semibold",
                              }}
                            >
                              {organization}
                            </Text>

                            <Text
                              style={{
                                fontSize: "7px",
                                color: "#acb1c3",
                                fontWeight: "semibold",
                              }}
                            >
                              {getYearFromDate(start_date)} -{" "}
                              {getYearFromDate(end_date)}
                            </Text>
                          </View>
                          <Text
                            style={{
                              fontSize: "8px",
                              color: "#a4a4a4",
                            }}
                          >
                            {responsibilities}
                          </Text>
                        </View>
                      );
                    }
                  )}
                </View>
              </View>
            </View>
          )}

          {/* Education ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>. */}

          {resumeDataArray?.education?.length !== 0 && (
            <View
              style={{ flexDirection: "row", marginTop: "0px", zIndex: -5 }}
            >
              <Image
                src={StepIcon}
                style={{
                  width: "60px",
                  height: "60px",
                  marginLeft: "-20px",
                  marginTop: "-20px",
                }}
              />

              <View
                style={{
                  borderLeft: "2px",
                  borderLeftWidth: "1px",
                  borderColor: "#9b9c9c",
                  marginLeft: "-30.5px",

                  paddingLeft: "30px",
                  width: "100%",
                  paddingBottom: `${
                    resumeDataArray?.skill?.length === 0 ? "0px" : "20px"
                  }`,
                }}
              >
                <Text
                  style={{
                    paddingTop: "-5px",
                    color: "#e2e6ee",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  Education
                </Text>
                <View
                  style={{
                    minHeight: "50px",
                    width: "100%",
                    backgroundColor: "#1b1b1c",
                    paddingVertical: "5px",
                    paddingHorizontal: "10px",
                    borderRadius: "6px",
                    marginTop: "10px",
                    gap: "20px",
                    zIndex: -3,
                  }}
                >
                  {resumeDataArray?.education?.map(
                    (
                      {
                        institute_name,
                        course_txt,
                        start_date,
                        end_date,
                        education_type,
                        result,
                        specialization,
                      },
                      index
                    ) => {
                      return (
                        <View key={index} style={{ gap: "5px" }}>
                          <Text
                            style={{
                              fontSize: "8px",
                              color: "#acb1c3",
                              fontWeight: "semibold",
                            }}
                          >
                            {institute_name}
                          </Text>

                          <View
                            style={{
                              flexDirection: "row",
                              justifyContent: "space-between",
                            }}
                          >
                            <Text
                              style={{
                                fontSize: "8px",
                                color: "#fff",
                                fontWeight: "semibold",
                              }}
                            >
                              {course_txt}
                              {result ? `, ${result}` : ""}
                            </Text>

                            <Text
                              style={{
                                fontSize: "7px",
                                color: "#acb1c3",
                                fontWeight: "semibold",
                              }}
                            >
                              {getYearFromDate(start_date)} -{" "}
                              {getYearFromDate(end_date)}
                            </Text>
                          </View>
                          <Text
                            style={{
                              fontSize: "8px",
                              color: "#a4a4a4",
                            }}
                          >
                            {education_type}
                          </Text>
                          <Text
                            style={{
                              fontSize: "8px",
                              color: "#a4a4a4",
                            }}
                          >
                            {specialization}
                          </Text>
                        </View>
                      );
                    }
                  )}
                </View>
              </View>
            </View>
          )}

          {/* Skills ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>. */}

          {resumeDataArray?.skill?.length !== 0 && (
            <View style={{ flexDirection: "row", marginTop: "0px" }}>
              <Image
                src={StepIcon}
                style={{
                  width: "60px",
                  height: "60px",
                  marginLeft: "-20px",
                  marginTop: "-20px",
                }}
              />

              <View
                style={{
                  borderLeft: "2px",
                  borderLeftWidth: "1px",
                  borderColor: "#9b9c9c",
                  marginLeft: "-30.5px",
                  zIndex: -1,
                  paddingLeft: "30px",
                  width: "100%",
                  paddingBottom: `${
                    resumeDataArray?.certificate?.length === 0 ? "0px" : "20px"
                  }`,
                }}
              >
                <Text
                  style={{
                    paddingTop: "-5px",
                    color: "#e2e6ee",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  Skills
                </Text>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    marginTop: "10px",
                    gap: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  {resumeDataArray?.skill?.map((item, index) => {
                    return (
                      <View key={index} style={{ gap: "5px" }}>
                        <Text
                          style={{
                            fontSize: "8px",
                            color: "white",
                            fontWeight: "semibold",
                            backgroundColor: "#1b1b1c",
                            paddingHorizontal: "10px",
                            paddingVertical: "5px",
                            borderRadius: "10px",
                            textTransform: "capitalize",
                          }}
                        >
                          {item}
                        </Text>
                      </View>
                    );
                  })}
                </View>
              </View>
            </View>
          )}

          {/* Certificates ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>. */}

          {resumeDataArray?.certificate?.length !== 0 && (
            <View style={{ flexDirection: "row", marginTop: "0px" }}>
              <Image
                src={StepIcon}
                style={{
                  width: "60px",
                  height: "60px",
                  marginLeft: "-20px",
                  marginTop: "-20px",
                }}
              />

              <View
                style={{
                  borderLeft: "2px",
                  borderLeftWidth: "1px",
                  borderColor: "#9b9c9c",
                  marginLeft: "-30.5px",
                  zIndex: -1,
                  paddingLeft: "30px",
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    paddingTop: "-5px",
                    color: "#e2e6ee",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  Certificates
                </Text>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "column",
                    marginTop: "10px",
                    gap: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  {resumeDataArray?.certificate?.map(
                    ({ title, url }, index) => (
                      <View
                        key={index}
                        style={{
                          fontSize: "8px",
                          color: "white",
                          fontWeight: "semibold",
                          backgroundColor: "#1b1b1c",
                          paddingHorizontal: "10px",
                          paddingVertical: "5px",
                          borderRadius: "10px",
                          textTransform: "capitalize",
                          flexDirection: "row",
                          width: "100%",
                        }}
                      >
                        <Text
                          style={{
                            marginRight: 4,
                            fontSize: 8,
                            color: "white",
                          }}
                        >
                          {index + 1}.
                        </Text>
                        <Link
                          src={url}
                          style={{
                            fontSize: 8,
                            textTransform: "capitalize",
                            textDecoration: "none",
                            color: "white",
                          }}
                        >
                          {title}
                        </Link>
                      </View>
                    )
                  )}
                </View>
              </View>
            </View>
          )}
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
        <button
          className=" px-4 rounded-lg bg-[#da3682] text-white font-semibold leading-3"
          onClick={() => handlePayment()}
        >
          Remove Watermark
        </button>

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

export default ResumeThree;
