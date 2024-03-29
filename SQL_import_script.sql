DROP DATABASE IF EXISTS spadatasweb;
CREATE DATABASE spadatasweb;
USE spadatasweb;

DROP TABLE IF EXISTS Resource CASCADE;
CREATE TABLE Resource (
    resourceKey VARCHAR(255),
    Item_Type VARCHAR(255),
    Publication_Year VARCHAR(255),
    Author VARCHAR(255),
    Title VARCHAR(255),
    Publication_Title VARCHAR(255),
    ISBN VARCHAR(255),
    ISSN VARCHAR(255),
    DOI VARCHAR(255),
    Url VARCHAR(255),
    Abstract_Note VARCHAR(1500),
    resourceDate VARCHAR(255),
    Date_Added VARCHAR(255),
    Date_Modified VARCHAR(255),
    Access_Date VARCHAR(255),
    Pages VARCHAR(255),
    Num_Pages VARCHAR(255),
    Issue VARCHAR(255),
    Volume VARCHAR(255),
    Number_Of_Volumes VARCHAR(255),
    Journal_Abbreviation VARCHAR(255),
    Short_Title VARCHAR(255),
    Series VARCHAR(255),
    Series_Number VARCHAR(255),
    Series_Text VARCHAR(255),
    Series_Title VARCHAR(255),
    Publisher VARCHAR(255),
    Place VARCHAR(255),
    resourceLanguage VARCHAR(255),
    Rights VARCHAR(255),
    resourceType VARCHAR(255),
    Archive VARCHAR(255),
    Archive_Location VARCHAR(255),
    Library_Catalog VARCHAR(255),
    Call_Number VARCHAR(255),
    Extra VARCHAR(255),
    Notes VARCHAR(255),
    File_Attachments VARCHAR(255),
    Link_Attachments VARCHAR(255),
    Manual_Tags VARCHAR(255),
    Automatic_Tags VARCHAR(255),
    Editor VARCHAR(255),
    Series_Editor VARCHAR(255),
    Translator VARCHAR(255),
    Contributor VARCHAR(255),
    Attorney_Agent VARCHAR(255),
    Book_Author VARCHAR(255),
    Cast_Member VARCHAR(255),
    Commenter VARCHAR(255),
    Composer VARCHAR(255),
    Cosponsor VARCHAR(255),
    Counsel VARCHAR(255),
    Interviewer VARCHAR(255),
    Producer VARCHAR(255),
    Recipient VARCHAR(255),
    Reviewed_Author VARCHAR(255),
    Scriptwriter VARCHAR(255),
    Words_By VARCHAR(255),
    Guest VARCHAR(255),
    resourceNumber VARCHAR(255),
    Edition VARCHAR(255),
    Running_Time VARCHAR(255),
    Scale VARCHAR(255),
    resourceMedium VARCHAR(255),
    Artwork_Size VARCHAR(255),
    Filing_Date VARCHAR(255),
    Application_Number VARCHAR(255),
    Assignee VARCHAR(255),
    Issuing_Authority VARCHAR(255),
    Country VARCHAR(255),
    Meeting_Name VARCHAR(255),
    Conference_Name VARCHAR(255),
    Court VARCHAR(255),
    resourceReferences VARCHAR(255),
    Reporter VARCHAR(255),
    Legal_Status VARCHAR(255),
    Priority_Numbers VARCHAR(255),
    Programming_Language VARCHAR(255),
    Version VARCHAR(255),
    System VARCHAR(255),
    resourceCode VARCHAR(255),
    Code_Number VARCHAR(255),
    Section VARCHAR(255),
    resourceSession VARCHAR(255),
    Committee VARCHAR(255),
    History VARCHAR(255),
    Legislative_Body VARCHAR(255),
    PRIMARY KEY (resourceKey)
);


LOAD DATA INFILE 'PATH_TO_SPADATAS_RESOURCES_CSV.csv'
INTO TABLE Resource
FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n'
IGNORE 1 LINES;