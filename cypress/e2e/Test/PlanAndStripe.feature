Feature: Test GiffMall

    Scenario Outline: Order_a_plan_and_payment_stripe
        Given "Guest" go to home page
        When Search "<city>" and "<celebretion>"
        When Select a plan
        And Get infomation in plan detail
        When Go to Reservation Information Stage from button Proceed to booking
        When Enter reservation information
        Then Check price in reservation infomation
        When Go to customer infomation stage
        When Enter customer infomation
            | textFirstKanji | textSecondKanji | textFirstKana | textSecondKana | phoneNumber | email            | confirmMail      | childrenAnswer | messageAnswer | dislikeAnswer | requestOrInquiries |
            | あかさはら     | あかさはら      | アカハラナ    | アカハラナ     | 0123456789  | dunghv@gmail.com | dunghv@gmail.com | good           | good          | good          | good               |
        And Checkout with payment method "online"
        And Enter card checkout infomation
        When Get infomation booking in checkout success page
        Given "Admin" go to home page
        When "Admin" login
        And Go to list booking
        And Search a booking
        And View booking detail
        When Get infomation booking in info booking basic
        Then Check infomation booking in info booking basic
        When Go to activities tab in info booking
        And Get infomation booking in info booking activities
        Then Check infomation booking in info booking activities
        Examples:
            | city   | celebretion |
            | 東京都 | 誕生日      |

