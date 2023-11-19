---
title: Payroll Automation Using Telegram Bot
date: '2023-10-20'
excerpt: Creation of a simple telegram bot using Python & python-telegram-bot library, and hosting it on Amazon EC2.
image: 'cover.jpg'
imageCreditSource: Freepik
imageCreditLink: "https://www.freepik.com/free-photo/3d-rendering-social-media-icon_59781222.htm#query=telegram&position=0&from_view=search&track=sph"
category: 'Programming'
isFeatured: true
---

## Objective

This project aims to simplify payroll accounting and streamline the calculation of earnings from part-time work using the Telegram bot API.



## Background

- **Programming Language:** Python
- **Featured Libraries:**
    - [python-telegram-bot](https://python-telegram-bot.org)
    - [pymysql](https://pypi.org/project/pymysql/)
- **Cloud Hosting:** AWS EC2
- **Database:** Amazon RDS (MySQL)

## Logic

The project's functionality is organized around a set of commands initiated with a `/start\` command:

1. `/add`
2. `/edit`
3. `/summary`

### /add

The `/add` command allows users to input their work data into the database. The bot collects the following information from the user:

- Date of the shift
- Type of the shift

In addition to this data, the bot automatically assigns an ID and records the user's Telegram username for each entry. This username is used later to filter relevant entries. The SQL command for adding data is as follows:

```sql
INSERT INTO Entries (shift_date, shift_type, username) VALUES (%s, %s, %s);
```

### /edit

The `/edit` command is a pivotal component of this project, allowing users to modify their recorded data. The process commences by requesting the user to provide a date instance. Once the user provides a date, the system checks whether an instance corresponding to that date exists in the database for the specific username. This step ensures data integrity and provides users with the ability to make necessary amendments.

### /summary

The `/summary` command delivers a valuable feature by offering users a comprehensive overview of their recorded instances. When executed, this command retrieves all instances from the database that pertain to the specific user, enabling them to access their complete work history with ease.

## ConversationHandler: Managing User Interactions

The conversation management aspect of the project is facilitated by the `python-telegram-bot` library, which comprises two integral packages: `telegram` and `telegram.ext`. This library is employed to manage the various stages of the conversation that users have with the Telegram bot. The heart of this management is the `ConversationHandler`, which is configured with three main parameters:

1. **entry_points:** This parameter defines how conversations are initiated. It can be triggered through `telegram.ext.CommandHandler` or `telegram.ext.MessageHandler`.

2. **states:** The `states` parameter, which is a dictionary, outlines the different stages of a conversation. For example, after initiating the `/add` command, there are three distinct stages:
   - Entering the date of the shift
   - Specifying the type of shift
   - Confirming data entry before saving it in the database.

3. **fallbacks:** The `fallbacks` parameter, which is another list, is used to handle commands or messages that are not explicitly defined in the state parameter. It's particularly useful for managing unexpected interactions and providing users with options like `/cancel` to exit ongoing conversations.

Here's an example configuration of the `ConversationHandler`:

```python
conv_handler = ConversationHandler(
    entry_points=[CommandHandler('start', start)],
    states={
        INITIATION: [CommandHandler('add', add), CommandHandler('edit', edit), CommandHandler('summary', summary)],
        CHECK_DATE: [MessageHandler(filters.TEXT, check_date)],
        CHECK_SHIFT_TYPE: [MessageHandler(filters.TEXT, check_shift_type)],
        CONFIRM_DATA_ENTRY: [MessageHandler(filters.TEXT, confirm_data_entry)],
        CHECK_DATE_FOR_EDIT: [MessageHandler(filters.TEXT, check_date_edit)],
        CHECK_EDIT_OR_DELETE: [MessageHandler(filters.TEXT, check_edit_or_delete)],
        EDIT_SHIFT_TYPE: [MessageHandler(filters.TEXT, edit_shift_type)],
    },
    fallbacks=[CommandHandler("cancel", cancel), MessageHandler(filters.COMMAND, unknown)]
)
```

This well-structured configuration ensures that conversations between users and the Telegram bot proceed smoothly and logically.

## Potential Enhancements
### Connection Pooling
While the current setup is tailored for a single user, it's worthwhile to consider connection pooling for future scalability. As your project expands or when working on endeavors with a substantial user base, implementing connection pooling can significantly enhance performance, resource efficiency, and effective management of connections with the database.

### Code Organization
As this project started as a prototype and minimum viable product (MVP), simplicity in code organization sufficed as long as it met functionality requirements. However, for more extensive development, consider compartmentalizing the codebase into various segments for improved reference and maintenance. For instance, establish separate modules for database-related functions, while bot-related functions can be categorized according to specific functionalities.

## Conclusion
In conclusion, this project presented an enjoyable and valuable experience, leveraging the capabilities of the free API offered by the Telegram bot. The source code is available [here](https://github.com/terrykms/money-telebot), and I welcome any feedback or contributions to enhance this project further.
