module Main exposing (main)

import Browser
import Html exposing (Html, div, text)
import Html.Attributes exposing (..)


main : Program () Bill Msg
main =
    Browser.sandbox { init = init, update = update, view = view }


type alias Bill =
    { subtotal : Float
    , tipPercentage : Float
    , tipAmount : Float
    , totalAmount : Float
    }


init : Bill
init =
    Bill 0.0 0.0 0.0 0.0


type Msg
    = ChangeSubtotal Float
    | ChangeTipPercentage Float


update : Msg -> Bill -> Bill
update msg model =
    case msg of
        ChangeSubtotal subtotal ->
            { model | subtotal = subtotal } |> calculate

        ChangeTipPercentage tipPercentage ->
            { model | tipPercentage = tipPercentage } |> calculate


calculate : Bill -> Bill
calculate bill =
    bill
        |> calculateTipAmount
        |> calculateTotalAmount


calculateTipAmount : Bill -> Bill
calculateTipAmount bill =
    { bill | tipAmount = ( bill.tipPercentage, bill.subtotal ) |> percentage }


calculateTotalAmount : Bill -> Bill
calculateTotalAmount bill =
    { bill | totalAmount = .tipAmount bill + .subtotal bill }


percentage : ( Float, Float ) -> Float
percentage ( num, percent ) =
    num * percentageToDecimal percent


percentageToDecimal : Float -> Float
percentageToDecimal num =
    num / 100


view : Bill -> Html Msg
view model =
    div []
        [ text "Hello Elm!"
        ]
