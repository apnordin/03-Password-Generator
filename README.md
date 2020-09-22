# 03 JavaScript: Password Generator

- This web application generates a random password based off of the selection criteria which is chosen via prompts on the webpage

## Acceptance Criteria

- After clicking the button to generate a password:
    - User is presented with a series of prompts for password criteria
        - Upper case
        - Lower case
        - Numeric
        - Special Characters
        - Password length
    - Each prompt selection except for password length is validated ("may contain..." or "will not contain...")
    - Only valid password lengths are allowed (8-128)
        - A function return starts the app over if the length selected is lower than 8 or higher than 128
    - The password is generated
    - The password is displayed in the text box on screen