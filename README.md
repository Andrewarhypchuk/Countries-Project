# Countries-Project
- Application’s header
o Application’s header with the title “Countries Search”  added at the
top of the applicationApplication form
o Form consists of two fields
o “Type of Search” field:
§ The first field consists of two radio buttons with labels (By
Region, By Language)
§ Description “Please choose the type of search:” should is added
before radio buttons;
Search query field
§ The second field is a dropdown (can be used <select>)
component.
§ If in the first field was selected “By region” value the expanded select
consists of possible regions otherwise all possible languages.
§ Before the dropdown is description “Please choose search
query:”
§ In case if value is not selected “Select value” is shown in the
dropdown
§ If value from the first field is not chosen the select is disabled
  - Application table
o If the search query is not selected then the label “No items, please choose
search query” should is shown instead of the table
o Once a user choose search query then a table with results should be shown
§ Table consists of 6 columns
• Country name
• Capital
• World region
• Languages (should be shown all official languages in a
country)
• Area
• Flag (Should be shown a flag of an appropriate country)
is included with next way: <img src=”flagURL”>
The URL can is taken from the countryList
§ You can receive countryList from externaService module
• externalService.getCountryListByRegion(query);
• externalService.getCountryListByLanguage(query);
