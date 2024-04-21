import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Form = ({ token }) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentMonth + 1,
    0
  ).getDate();

  //MAIN COMMENT
  const [mainComment, setMainComment] = useState("");
  const [data, setData] = useState({});

  // TOTAL INVOICES BY DAYS
  const [dayOneInv, setDayOneInv] = useState(0);
  const [dayTwoInv, setDayTwoInv] = useState(0);
  const [dayThreeInv, setDayThreeInv] = useState(0);
  const [dayFourInv, setDayFourInv] = useState(0);
  const [dayFiveInv, setDayFiveInv] = useState(0);
  const [daySixInv, setDaySixInv] = useState(0);
  const [daySevenInv, setDaySevenInv] = useState(0);
  const [dayEightInv, setDayEightInv] = useState(0);
  const [dayNineInv, setDayNineInv] = useState(0);
  const [dayTenInv, setDayTenInv] = useState(0);
  const [dayElevenInv, setDayElevenInv] = useState(0);
  const [dayTwelveInv, setDayTwelveInv] = useState(0);
  const [dayThirteenInv, setDayThirteenInv] = useState(0);
  const [dayFourteenInv, setDayFourteenInv] = useState(0);
  const [dayFifteenInv, setDayFifteenInv] = useState(0);
  const [daySixteenInv, setDaySixteenInv] = useState(0);
  const [daySeventeenInv, setDaySeventeenInv] = useState(0);
  const [dayEighteenInv, setDayEighteenInv] = useState(0);
  const [dayNineteenInv, setDayNineteenInv] = useState(0);
  const [dayTwentyInv, setDayTwentyInv] = useState(0);
  const [dayTwentyoneInv, setDayTwentyoneInv] = useState(0);
  const [dayTwentytwoInv, setDayTwentytwoInv] = useState(0);
  const [dayTwentythreeInv, setDayTwentythreeInv] = useState(0);
  const [dayTwentyfourInv, setDayTwentyfourInv] = useState(0);
  const [dayTwentyfiveInv, setDayTwentyfiveInv] = useState(0);
  const [dayTwentysixInv, setDayTwentysixInv] = useState(0);
  const [dayTwentysevenInv, setDayTwentysevenInv] = useState(0);
  const [dayTwentyeightInv, setDayTwentyeightInv] = useState(0);
  const [dayTwentynineInv, setDayTwentynineInv] = useState(0);
  const [dayThirtyInv, setDayThirtyInv] = useState(0);
  const [dayThirtyoneInv, setDayThirtyoneInv] = useState(0);

  // TOTAL ITEMS SOLD BY DAYS

  const [dayOneItemSold, setDayOneItemSold] = useState(0);
  const [dayTwoItemSold, setDayTwoItemSold] = useState(0);
  const [dayThreeItemSold, setDayThreeItemSold] = useState(0);
  const [dayFourItemSold, setDayFourItemSold] = useState(0);
  const [dayFiveItemSold, setDayFiveItemSold] = useState(0);
  const [daySixItemSold, setDaySixItemSold] = useState(0);
  const [daySevenItemSold, setDaySevenItemSold] = useState(0);
  const [dayEightItemSold, setDayEightItemSold] = useState(0);
  const [dayNineItemSold, setDayNineItemSold] = useState(0);
  const [dayTenItemSold, setDayTenItemSold] = useState(0);
  const [dayElevenItemSold, setDayElevenItemSold] = useState(0);
  const [dayTwelveItemSold, setDayTwelveItemSold] = useState(0);
  const [dayThirteenItemSold, setDayThirteenItemSold] = useState(0);
  const [dayFourteenItemSold, setDayFourteenItemSold] = useState(0);
  const [dayFifteenItemSold, setDayFifteenItemSold] = useState(0);
  const [daySixteenItemSold, setDaySixteenItemSold] = useState(0);
  const [daySeventeenItemSold, setDaySeventeenItemSold] = useState(0);
  const [dayEighteenItemSold, setDayEighteenItemSold] = useState(0);
  const [dayNineteenItemSold, setDayNineteenItemSold] = useState(0);
  const [dayTwentyItemSold, setDayTwentyItemSold] = useState(0);
  const [dayTwentyoneItemSold, setDayTwentyoneItemSold] = useState(0);
  const [dayTwentytwoItemSold, setDayTwentytwoItemSold] = useState(0);
  const [dayTwentythreeItemSold, setDayTwentythreeItemSold] = useState(0);
  const [dayTwentyfourItemSold, setDayTwentyfourItemSold] = useState(0);
  const [dayTwentyfiveItemSold, setDayTwentyfiveItemSold] = useState(0);
  const [dayTwentysixItemSold, setDayTwentysixItemSold] = useState(0);
  const [dayTwentysevenItemSold, setDayTwentysevenItemSold] = useState(0);
  const [dayTwentyeightItemSold, setDayTwentyeightItemSold] = useState(0);
  const [dayTwentynineItemSold, setDayTwentynineItemSold] = useState(0);
  const [dayThirtyItemSold, setDayThirtyItemSold] = useState(0);
  const [dayThirtyoneItemSold, setDayThirtyoneItemSold] = useState(0);

  // TOTAL AMOUNT BY DAYS

  const [dayOneAmount, setDayOneAmount] = useState(0);
  const [dayTwoAmount, setDayTwoAmount] = useState(0);
  const [dayThreeAmount, setDayThreeAmount] = useState(0);
  const [dayFourAmount, setDayFourAmount] = useState(0);
  const [dayFiveAmount, setDayFiveAmount] = useState(0);
  const [daySixAmount, setDaySixAmount] = useState(0);
  const [daySevenAmount, setDaySevenAmount] = useState(0);
  const [dayEightAmount, setDayEightAmount] = useState(0);
  const [dayNineAmount, setDayNineAmount] = useState(0);
  const [dayTenAmount, setDayTenAmount] = useState(0);
  const [dayElevenAmount, setDayElevenAmount] = useState(0);
  const [dayTwelveAmount, setDayTwelveAmount] = useState(0);
  const [dayThirteenAmount, setDayThirteenAmount] = useState(0);
  const [dayFourteenAmount, setDayFourteenAmount] = useState(0);
  const [dayFifteenAmount, setDayFifteenAmount] = useState(0);
  const [daySixteenAmount, setDaySixteenAmount] = useState(0);
  const [daySeventeenAmount, setDaySeventeenAmount] = useState(0);
  const [dayEighteenAmount, setDayEighteenAmount] = useState(0);
  const [dayNineteenAmount, setDayNineteenAmount] = useState(0);
  const [dayTwentyAmount, setDayTwentyAmount] = useState(0);
  const [dayTwentyoneAmount, setDayTwentyoneAmount] = useState(0);
  const [dayTwentytwoAmount, setDayTwentytwoAmount] = useState(0);
  const [dayTwentythreeAmount, setDayTwentythreeAmount] = useState(0);
  const [dayTwentyfourAmount, setDayTwentyfourAmount] = useState(0);
  const [dayTwentyfiveAmount, setDayTwentyfiveAmount] = useState(0);
  const [dayTwentysixAmount, setDayTwentysixAmount] = useState(0);
  const [dayTwentysevenAmount, setDayTwentysevenAmount] = useState(0);
  const [dayTwentyeightAmount, setDayTwentyeightAmount] = useState(0);
  const [dayTwentynineAmount, setDayTwentynineAmount] = useState(0);
  const [dayThirtyAmount, setDayThirtyAmount] = useState(0);
  const [dayThirtyoneAmount, setDayThirtyoneAmount] = useState(0);

  // DAYS COMMENTS

  const [dayOneComment, setDayOneComment] = useState("");
  const [dayTwoComment, setDayTwoComment] = useState("");
  const [dayThreeComment, setDayThreeComment] = useState("");
  const [dayFourComment, setDayFourComment] = useState("");
  const [dayFiveComment, setDayFiveComment] = useState("");
  const [daySixComment, setDaySixComment] = useState("");
  const [daySevenComment, setDaySevenComment] = useState("");
  const [dayEightComment, setDayEightComment] = useState("");
  const [dayNineComment, setDayNineComment] = useState("");
  const [dayTenComment, setDayTenComment] = useState("");
  const [dayElevenComment, setDayElevenComment] = useState("");
  const [dayTwelveComment, setDayTwelveComment] = useState("");
  const [dayThirteenComment, setDayThirteenComment] = useState("");
  const [dayFourteenComment, setDayFourteenComment] = useState("");
  const [dayFifteenComment, setDayFifteenComment] = useState("");
  const [daySixteenComment, setDaySixteenComment] = useState("");
  const [daySeventeenComment, setDaySeventeenComment] = useState("");
  const [dayEighteenComment, setDayEighteenComment] = useState("");
  const [dayNineteenComment, setDayNineteenComment] = useState("");
  const [dayTwentyComment, setDayTwentyComment] = useState("");
  const [dayTwentyoneComment, setDayTwentyoneComment] = useState("");
  const [dayTwentytwoComment, setDayTwentytwoComment] = useState("");
  const [dayTwentythreeComment, setDayTwentythreeComment] = useState("");
  const [dayTwentyfourComment, setDayTwentyfourComment] = useState("");
  const [dayTwentyfiveComment, setDayTwentyfiveComment] = useState("");
  const [dayTwentysixComment, setDayTwentysixComment] = useState("");
  const [dayTwentysevenComment, setDayTwentysevenComment] = useState("");
  const [dayTwentyeightComment, setDayTwentyeightComment] = useState("");
  const [dayTwentynineComment, setDayTwentynineComment] = useState("");
  const [dayThirtyComment, setDayThirtyComment] = useState("");
  const [dayThirtyoneComment, setDayThirtyoneComment] = useState("");

  const grandTotalAmount =
    Number(dayOneAmount) +
    Number(dayTwoAmount) +
    Number(dayThreeAmount) +
    Number(dayFourAmount) +
    Number(dayFiveAmount) +
    Number(daySixAmount) +
    Number(daySevenAmount) +
    Number(dayEightAmount) +
    Number(dayNineAmount) +
    Number(dayTenAmount) +
    Number(dayElevenAmount) +
    Number(dayTwelveAmount) +
    Number(dayThirteenAmount) +
    Number(dayFourteenAmount) +
    Number(dayFifteenAmount) +
    Number(daySixteenAmount) +
    Number(daySeventeenAmount) +
    Number(dayEighteenAmount) +
    Number(dayNineteenAmount) +
    Number(dayTwentyAmount) +
    Number(dayTwentyoneAmount) +
    Number(dayTwentytwoAmount) +
    Number(dayTwentythreeAmount) +
    Number(dayTwentyfourAmount) +
    Number(dayTwentyfiveAmount) +
    Number(dayTwentysixAmount) +
    Number(dayTwentysevenAmount) +
    Number(dayTwentyeightAmount) +
    Number(dayTwentynineAmount) +
    Number(dayThirtyAmount) +
    Number(dayThirtyoneAmount);

  const grandTotalInvoices =
    Number(dayOneInv) +
    Number(dayTwoInv) +
    Number(dayThreeInv) +
    Number(dayFourInv) +
    Number(dayFiveInv) +
    Number(daySixInv) +
    Number(daySevenInv) +
    Number(dayEightInv) +
    Number(dayNineInv) +
    Number(dayTenInv) +
    Number(dayElevenInv) +
    Number(dayTwelveInv) +
    Number(dayThirteenInv) +
    Number(dayFourteenInv) +
    Number(dayFifteenInv) +
    Number(daySixteenInv) +
    Number(daySeventeenInv) +
    Number(dayEighteenInv) +
    Number(dayNineteenInv) +
    Number(dayTwentyInv) +
    Number(dayTwentyoneInv) +
    Number(dayTwentytwoInv) +
    Number(dayTwentythreeInv) +
    Number(dayTwentyfourInv) +
    Number(dayTwentyfiveInv) +
    Number(dayTwentysixInv) +
    Number(dayTwentysevenInv) +
    Number(dayTwentyeightInv) +
    Number(dayTwentynineInv) +
    Number(dayThirtyInv) +
    Number(dayThirtyoneInv);

  const grandTotalSoldItemms =
    Number(dayOneItemSold) +
    Number(dayTwoItemSold) +
    Number(dayThreeItemSold) +
    Number(dayFourItemSold) +
    Number(dayFiveItemSold) +
    Number(daySixItemSold) +
    Number(daySevenItemSold) +
    Number(dayEightItemSold) +
    Number(dayNineItemSold) +
    Number(dayTenItemSold) +
    Number(dayElevenItemSold) +
    Number(dayTwelveItemSold) +
    Number(dayThirteenItemSold) +
    Number(dayFourteenItemSold) +
    Number(dayFifteenItemSold) +
    Number(daySixteenItemSold) +
    Number(daySeventeenItemSold) +
    Number(dayEighteenItemSold) +
    Number(dayNineteenItemSold) +
    Number(dayTwentyItemSold) +
    Number(dayTwentyoneItemSold) +
    Number(dayTwentytwoItemSold) +
    Number(dayTwentythreeItemSold) +
    Number(dayTwentyfourItemSold) +
    Number(dayTwentyfiveItemSold) +
    Number(dayTwentysixItemSold) +
    Number(dayTwentysevenItemSold) +
    Number(dayTwentyeightItemSold) +
    Number(dayTwentynineItemSold) +
    Number(dayThirtyItemSold) +
    Number(dayThirtyoneItemSold);

  // const GrandTotalTotalItemSold_Str = grandTotalSoldItemmsDecimal;

  const formattedDate =
    currentDate.toISOString().split("T")[0] +
    "T" +
    ("0" + currentDate.getHours()).slice(-2) +
    ":" +
    ("0" + currentDate.getMinutes()).slice(-2) +
    ":" +
    ("0" + currentDate.getSeconds()).slice(-2);

  const body31 = {
    LeaseCode: "t0001235",
    SalesTypeCode: "fnb",
    PropertyCode: "mgb",
    TransactionDate: formattedDate,
    TransactionSource: 1,
    RequestStatus: 2,
    SalesRequestComments: mainComment,
    TransactionType: 1,
    SalesRequestId: 0,

    BulkSalesModels: [
      {
        LeaseCode: "t0001235",
        SalesTypeCode: "fnb",
        PropertyCode: "mgb",
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TransactionType: 1,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-01T00:00:00`,
        TotalInvoices: Number(dayOneInv),
        TotalItemSold: Number(dayOneItemSold),
        TransactionAmount: Number(dayOneAmount),

        SaleTransactionComments: dayOneComment,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,

        TransactionId: 0,
        TransactionNumber: null,
        Year: 0,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-02T00:00:00`,
        TransactionAmount: Number(dayTwoAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwoComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwoInv),
        TotalItemSold: Number(dayTwoItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-03T00:00:00`,
        TransactionAmount: Number(dayThreeAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayThreeComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayThreeInv),
        TotalItemSold: Number(dayThreeItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-04T00:00:00`,
        TransactionAmount: Number(dayFourAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayFourComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayFourInv),
        TotalItemSold: Number(dayFourItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-05T00:00:00`,
        TransactionAmount: Number(dayFiveAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayFiveComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayFiveInv),
        TotalItemSold: Number(dayFiveItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-06T00:00:00`,
        TransactionAmount: Number(daySixAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: daySixComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(daySixInv),
        TotalItemSold: Number(daySixItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-07T00:00:00`,
        TransactionAmount: Number(daySevenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: daySevenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(daySevenInv),
        TotalItemSold: Number(daySevenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-08T00:00:00`,
        TransactionAmount: Number(dayEightAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayEightComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayEightInv),
        TotalItemSold: Number(dayEightItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-09T00:00:00`,
        TransactionAmount: Number(dayNineAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayNineComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayNineInv),
        TotalItemSold: Number(dayNineItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-10T00:00:00`,
        TransactionAmount: Number(dayTenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTenInv),
        TotalItemSold: Number(dayTenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-11T00:00:00`,
        TransactionAmount: Number(dayElevenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayElevenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayElevenInv),
        TotalItemSold: Number(dayElevenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-12T00:00:00`,
        TransactionAmount: Number(dayTwelveAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwelveComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwelveInv),
        TotalItemSold: Number(dayTwelveItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-13T00:00:00`,
        TransactionAmount: Number(dayThirteenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayThirteenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayThirteenInv),
        TotalItemSold: Number(dayThirteenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-14T00:00:00`,
        TransactionAmount: Number(dayFourteenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayFourteenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayFourteenInv),
        TotalItemSold: Number(dayFourteenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-15T00:00:00`,
        TransactionAmount: Number(dayFifteenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayFifteenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayFifteenInv),
        TotalItemSold: Number(dayFifteenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-16T00:00:00`,
        TransactionAmount: Number(daySixteenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: daySixteenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(daySixteenInv),
        TotalItemSold: Number(daySixteenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-17T00:00:00`,
        TransactionAmount: Number(daySeventeenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: daySeventeenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(daySeventeenInv),
        TotalItemSold: Number(daySeventeenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-18T00:00:00`,
        TransactionAmount: Number(dayEighteenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayEighteenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayEighteenInv),
        TotalItemSold: Number(dayEighteenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-19T00:00:00`,
        TransactionAmount: Number(dayNineteenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayNineteenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayNineteenInv),
        TotalItemSold: Number(dayNineteenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-20T00:00:00`,
        TransactionAmount: Number(dayTwentyAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentyComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentyInv),
        TotalItemSold: Number(dayTwentyItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-21T00:00:00`,
        TransactionAmount: Number(dayTwentyoneAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentyoneComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentyoneInv),
        TotalItemSold: Number(dayTwentyoneItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-22T00:00:00`,
        TransactionAmount: Number(dayTwentytwoAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentytwoComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentytwoInv),
        TotalItemSold: Number(dayTwentytwoItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-23T00:00:00`,
        TransactionAmount: Number(dayTwentythreeAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentythreeComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentythreeInv),
        TotalItemSold: Number(dayTwentythreeItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-24T00:00:00`,
        TransactionAmount: Number(dayTwentyfourAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentyfourComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentyfourInv),
        TotalItemSold: Number(dayTwentyfourItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-25T00:00:00`,
        TransactionAmount: Number(dayTwentyfiveAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentyfiveComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentyfiveInv),
        TotalItemSold: Number(dayTwentyfiveItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-26T00:00:00`,
        TransactionAmount: Number(dayTwentysixAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentysixComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentysixInv),
        TotalItemSold: Number(dayTwentysixItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-27T00:00:00`,
        TransactionAmount: Number(dayTwentysevenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentysevenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentysevenInv),
        TotalItemSold: Number(dayTwentysevenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-28T00:00:00`,
        TransactionAmount: Number(dayTwentyeightAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentyeightComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentyeightInv),
        TotalItemSold: Number(dayTwentyeightItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-29T00:00:00`,
        TransactionAmount: Number(dayTwentynineAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentynineComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentynineInv),
        TotalItemSold: Number(dayTwentynineItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-30T00:00:00`,
        TransactionAmount: Number(dayThirtyAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayThirtyComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayThirtyInv),
        TotalItemSold: Number(dayThirtyItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-31T00:00:00`,
        TransactionAmount: Number(dayThirtyoneAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayThirtyoneComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayThirtyoneInv),
        TotalItemSold: Number(dayThirtyoneItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },
    ],

    PropertyName: null,
    LeaseUnitCode: null,
    LeaseBrandName: null,
    TransactionYear: null,
    TransactionDate_Str: null,
    SaleTransactionStatus_Str: null,
    Day: 0,
    Month: 0,
    Year: 0,
    RequestNumber: null,
    ContactCode: null,
    CreatedUserId: 0,
    CreatedByEmail: null,
    SalesType: null,
    TransactionTypeStr: null,
    SaleTransactionSourceStr: null,
    GrandTotalTransactionAmount: 0,
    GrandTotalTransactionAmount_Str: null,
    GrandTotalTotalInvoices: 0,
    GrandTotalTotalInvoices_Str: null,
    GrandTotalTotalItemSold: 0,
    GrandTotalTotalItemSold_Str: null,
  };
  const body30 = {
    LeaseCode: "t0001235",
    SalesTypeCode: "fnb",
    PropertyCode: "mgb",
    TransactionDate: formattedDate,
    TransactionSource: 1,
    RequestStatus: 2,
    SalesRequestComments: mainComment,
    TransactionType: 1,
    SalesRequestId: 0,

    BulkSalesModels: [
      {
        LeaseCode: "t0001235",
        SalesTypeCode: "fnb",
        PropertyCode: "mgb",
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TransactionType: 1,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-01T00:00:00`,
        TotalInvoices: Number(dayOneInv),
        TotalItemSold: Number(dayOneItemSold),
        TransactionAmount: Number(dayOneAmount),

        SaleTransactionComments: dayOneComment,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,

        TransactionId: 0,
        TransactionNumber: null,
        Year: 0,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-02T00:00:00`,
        TransactionAmount: Number(dayTwoAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwoComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwoInv),
        TotalItemSold: Number(dayTwoItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-03T00:00:00`,
        TransactionAmount: Number(dayThreeAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayThreeComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayThreeInv),
        TotalItemSold: Number(dayThreeItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-04T00:00:00`,
        TransactionAmount: Number(dayFourAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayFourComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayFourInv),
        TotalItemSold: Number(dayFourItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-05T00:00:00`,
        TransactionAmount: Number(dayFiveAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayFiveComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayFiveInv),
        TotalItemSold: Number(dayFiveItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-06T00:00:00`,
        TransactionAmount: Number(daySixAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: daySixComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(daySixInv),
        TotalItemSold: Number(daySixItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-07T00:00:00`,
        TransactionAmount: Number(daySevenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: daySevenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(daySevenInv),
        TotalItemSold: Number(daySevenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-08T00:00:00`,
        TransactionAmount: Number(dayEightAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayEightComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayEightInv),
        TotalItemSold: Number(dayEightItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-09T00:00:00`,
        TransactionAmount: Number(dayNineAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayNineComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayNineInv),
        TotalItemSold: Number(dayNineItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-10T00:00:00`,
        TransactionAmount: Number(dayTenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTenInv),
        TotalItemSold: Number(dayTenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-11T00:00:00`,
        TransactionAmount: Number(dayElevenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayElevenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayElevenInv),
        TotalItemSold: Number(dayElevenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-12T00:00:00`,
        TransactionAmount: Number(dayTwelveAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwelveComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwelveInv),
        TotalItemSold: Number(dayTwelveItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-13T00:00:00`,
        TransactionAmount: Number(dayThirteenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayThirteenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayThirteenInv),
        TotalItemSold: Number(dayThirteenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-14T00:00:00`,
        TransactionAmount: Number(dayFourteenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayFourteenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayFourteenInv),
        TotalItemSold: Number(dayFourteenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-15T00:00:00`,
        TransactionAmount: Number(dayFifteenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayFifteenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayFifteenInv),
        TotalItemSold: Number(dayFifteenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-16T00:00:00`,
        TransactionAmount: Number(daySixteenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: daySixteenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(daySixteenInv),
        TotalItemSold: Number(daySixteenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-17T00:00:00`,
        TransactionAmount: Number(daySeventeenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: daySeventeenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(daySeventeenInv),
        TotalItemSold: Number(daySeventeenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-18T00:00:00`,
        TransactionAmount: Number(dayEighteenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayEighteenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayEighteenInv),
        TotalItemSold: Number(dayEighteenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-19T00:00:00`,
        TransactionAmount: Number(dayNineteenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayNineteenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayNineteenInv),
        TotalItemSold: Number(dayNineteenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-20T00:00:00`,
        TransactionAmount: Number(dayTwentyAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentyComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentyInv),
        TotalItemSold: Number(dayTwentyItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-21T00:00:00`,
        TransactionAmount: Number(dayTwentyoneAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentyoneComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentyoneInv),
        TotalItemSold: Number(dayTwentyoneItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-22T00:00:00`,
        TransactionAmount: Number(dayTwentytwoAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentytwoComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentytwoInv),
        TotalItemSold: Number(dayTwentytwoItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-23T00:00:00`,
        TransactionAmount: Number(dayTwentythreeAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentythreeComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentythreeInv),
        TotalItemSold: Number(dayTwentythreeItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-24T00:00:00`,
        TransactionAmount: Number(dayTwentyfourAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentyfourComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentyfourInv),
        TotalItemSold: Number(dayTwentyfourItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-25T00:00:00`,
        TransactionAmount: Number(dayTwentyfiveAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentyfiveComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentyfiveInv),
        TotalItemSold: Number(dayTwentyfiveItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-26T00:00:00`,
        TransactionAmount: Number(dayTwentysixAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentysixComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentysixInv),
        TotalItemSold: Number(dayTwentysixItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-27T00:00:00`,
        TransactionAmount: Number(dayTwentysevenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentysevenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentysevenInv),
        TotalItemSold: Number(dayTwentysevenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-28T00:00:00`,
        TransactionAmount: Number(dayTwentyeightAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentyeightComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentyeightInv),
        TotalItemSold: Number(dayTwentyeightItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-29T00:00:00`,
        TransactionAmount: Number(dayTwentynineAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentynineComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentynineInv),
        TotalItemSold: Number(dayTwentynineItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-30T00:00:00`,
        TransactionAmount: Number(dayThirtyAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayThirtyComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayThirtyInv),
        TotalItemSold: Number(dayThirtyItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },
    ],

    PropertyName: null,
    LeaseUnitCode: null,
    LeaseBrandName: null,
    TransactionYear: null,
    TransactionDate_Str: null,
    SaleTransactionStatus_Str: null,
    Day: 0,
    Month: 0,
    Year: 0,
    RequestNumber: null,
    ContactCode: null,
    CreatedUserId: 0,
    CreatedByEmail: null,
    SalesType: null,
    TransactionTypeStr: null,
    SaleTransactionSourceStr: null,
    GrandTotalTransactionAmount: 0,
    GrandTotalTransactionAmount_Str: null,
    GrandTotalTotalInvoices: 0,
    GrandTotalTotalInvoices_Str: null,
    GrandTotalTotalItemSold: 0,
    GrandTotalTotalItemSold_Str: null,
  };
  const body29 = {
    LeaseCode: "t0001235",
    SalesTypeCode: "fnb",
    PropertyCode: "mgb",
    TransactionDate: formattedDate,
    TransactionSource: 1,
    RequestStatus: 2,
    SalesRequestComments: mainComment,
    TransactionType: 1,
    SalesRequestId: 0,

    BulkSalesModels: [
      {
        LeaseCode: "t0001235",
        SalesTypeCode: "fnb",
        PropertyCode: "mgb",
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TransactionType: 1,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-01T00:00:00`,
        TotalInvoices: Number(dayOneInv),
        TotalItemSold: Number(dayOneItemSold),
        TransactionAmount: Number(dayOneAmount),

        SaleTransactionComments: dayOneComment,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,

        TransactionId: 0,
        TransactionNumber: null,
        Year: 0,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-02T00:00:00`,
        TransactionAmount: Number(dayTwoAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwoComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwoInv),
        TotalItemSold: Number(dayTwoItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-03T00:00:00`,
        TransactionAmount: Number(dayThreeAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayThreeComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayThreeInv),
        TotalItemSold: Number(dayThreeItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-04T00:00:00`,
        TransactionAmount: Number(dayFourAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayFourComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayFourInv),
        TotalItemSold: Number(dayFourItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-05T00:00:00`,
        TransactionAmount: Number(dayFiveAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayFiveComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayFiveInv),
        TotalItemSold: Number(dayFiveItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-06T00:00:00`,
        TransactionAmount: Number(daySixAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: daySixComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(daySixInv),
        TotalItemSold: Number(daySixItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-07T00:00:00`,
        TransactionAmount: Number(daySevenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: daySevenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(daySevenInv),
        TotalItemSold: Number(daySevenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-08T00:00:00`,
        TransactionAmount: Number(dayEightAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayEightComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayEightInv),
        TotalItemSold: Number(dayEightItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-09T00:00:00`,
        TransactionAmount: Number(dayNineAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayNineComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayNineInv),
        TotalItemSold: Number(dayNineItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-10T00:00:00`,
        TransactionAmount: Number(dayTenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTenInv),
        TotalItemSold: Number(dayTenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-11T00:00:00`,
        TransactionAmount: Number(dayElevenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayElevenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayElevenInv),
        TotalItemSold: Number(dayElevenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-12T00:00:00`,
        TransactionAmount: Number(dayTwelveAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwelveComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwelveInv),
        TotalItemSold: Number(dayTwelveItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-13T00:00:00`,
        TransactionAmount: Number(dayThirteenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayThirteenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayThirteenInv),
        TotalItemSold: Number(dayThirteenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-14T00:00:00`,
        TransactionAmount: Number(dayFourteenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayFourteenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayFourteenInv),
        TotalItemSold: Number(dayFourteenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-15T00:00:00`,
        TransactionAmount: Number(dayFifteenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayFifteenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayFifteenInv),
        TotalItemSold: Number(dayFifteenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-16T00:00:00`,
        TransactionAmount: Number(daySixteenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: daySixteenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(daySixteenInv),
        TotalItemSold: Number(daySixteenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-17T00:00:00`,
        TransactionAmount: Number(daySeventeenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: daySeventeenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(daySeventeenInv),
        TotalItemSold: Number(daySeventeenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-18T00:00:00`,
        TransactionAmount: Number(dayEighteenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayEighteenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayEighteenInv),
        TotalItemSold: Number(dayEighteenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-19T00:00:00`,
        TransactionAmount: Number(dayNineteenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayNineteenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayNineteenInv),
        TotalItemSold: Number(dayNineteenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-20T00:00:00`,
        TransactionAmount: Number(dayTwentyAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentyComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentyInv),
        TotalItemSold: Number(dayTwentyItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-21T00:00:00`,
        TransactionAmount: Number(dayTwentyoneAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentyoneComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentyoneInv),
        TotalItemSold: Number(dayTwentyoneItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-22T00:00:00`,
        TransactionAmount: Number(dayTwentytwoAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentytwoComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentytwoInv),
        TotalItemSold: Number(dayTwentytwoItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-23T00:00:00`,
        TransactionAmount: Number(dayTwentythreeAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentythreeComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentythreeInv),
        TotalItemSold: Number(dayTwentythreeItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-24T00:00:00`,
        TransactionAmount: Number(dayTwentyfourAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentyfourComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentyfourInv),
        TotalItemSold: Number(dayTwentyfourItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-25T00:00:00`,
        TransactionAmount: Number(dayTwentyfiveAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentyfiveComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentyfiveInv),
        TotalItemSold: Number(dayTwentyfiveItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-26T00:00:00`,
        TransactionAmount: Number(dayTwentysixAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentysixComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentysixInv),
        TotalItemSold: Number(dayTwentysixItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-27T00:00:00`,
        TransactionAmount: Number(dayTwentysevenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentysevenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentysevenInv),
        TotalItemSold: Number(dayTwentysevenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-28T00:00:00`,
        TransactionAmount: Number(dayTwentyeightAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentyeightComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentyeightInv),
        TotalItemSold: Number(dayTwentyeightItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-29T00:00:00`,
        TransactionAmount: Number(dayTwentynineAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentynineComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentynineInv),
        TotalItemSold: Number(dayTwentynineItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },
    ],

    PropertyName: null,
    LeaseUnitCode: null,
    LeaseBrandName: null,
    TransactionYear: null,
    TransactionDate_Str: null,
    SaleTransactionStatus_Str: null,
    Day: 0,
    Month: 0,
    Year: 0,
    RequestNumber: null,
    ContactCode: null,
    CreatedUserId: 0,
    CreatedByEmail: null,
    SalesType: null,
    TransactionTypeStr: null,
    SaleTransactionSourceStr: null,
    GrandTotalTransactionAmount: 0,
    GrandTotalTransactionAmount_Str: null,
    GrandTotalTotalInvoices: 0,
    GrandTotalTotalInvoices_Str: null,
    GrandTotalTotalItemSold: 0,
    GrandTotalTotalItemSold_Str: null,
  };
  const body28 = {
    LeaseCode: "t0001235",
    SalesTypeCode: "fnb",
    PropertyCode: "mgb",
    TransactionDate: formattedDate,
    TransactionSource: 1,
    RequestStatus: 2,
    SalesRequestComments: mainComment,
    TransactionType: 1,
    SalesRequestId: 0,

    BulkSalesModels: [
      {
        LeaseCode: "t0001235",
        SalesTypeCode: "fnb",
        PropertyCode: "mgb",
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TransactionType: 1,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-01T00:00:00`,
        TotalInvoices: Number(dayOneInv),
        TotalItemSold: Number(dayOneItemSold),
        TransactionAmount: Number(dayOneAmount),

        SaleTransactionComments: dayOneComment,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,

        TransactionId: 0,
        TransactionNumber: null,
        Year: 0,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-02T00:00:00`,
        TransactionAmount: Number(dayTwoAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwoComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwoInv),
        TotalItemSold: Number(dayTwoItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-03T00:00:00`,
        TransactionAmount: Number(dayThreeAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayThreeComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayThreeInv),
        TotalItemSold: Number(dayThreeItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-04T00:00:00`,
        TransactionAmount: Number(dayFourAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayFourComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayFourInv),
        TotalItemSold: Number(dayFourItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-05T00:00:00`,
        TransactionAmount: Number(dayFiveAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayFiveComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayFiveInv),
        TotalItemSold: Number(dayFiveItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-06T00:00:00`,
        TransactionAmount: Number(daySixAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: daySixComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(daySixInv),
        TotalItemSold: Number(daySixItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-07T00:00:00`,
        TransactionAmount: Number(daySevenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: daySevenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(daySevenInv),
        TotalItemSold: Number(daySevenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-08T00:00:00`,
        TransactionAmount: Number(dayEightAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayEightComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayEightInv),
        TotalItemSold: Number(dayEightItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-09T00:00:00`,
        TransactionAmount: Number(dayNineAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayNineComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayNineInv),
        TotalItemSold: Number(dayNineItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-10T00:00:00`,
        TransactionAmount: Number(dayTenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTenInv),
        TotalItemSold: Number(dayTenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-11T00:00:00`,
        TransactionAmount: Number(dayElevenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayElevenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayElevenInv),
        TotalItemSold: Number(dayElevenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-12T00:00:00`,
        TransactionAmount: Number(dayTwelveAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwelveComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwelveInv),
        TotalItemSold: Number(dayTwelveItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-13T00:00:00`,
        TransactionAmount: Number(dayThirteenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayThirteenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayThirteenInv),
        TotalItemSold: Number(dayThirteenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-14T00:00:00`,
        TransactionAmount: Number(dayFourteenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayFourteenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayFourteenInv),
        TotalItemSold: Number(dayFourteenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-15T00:00:00`,
        TransactionAmount: Number(dayFifteenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayFifteenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayFifteenInv),
        TotalItemSold: Number(dayFifteenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-16T00:00:00`,
        TransactionAmount: Number(daySixteenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: daySixteenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(daySixteenInv),
        TotalItemSold: Number(daySixteenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-17T00:00:00`,
        TransactionAmount: Number(daySeventeenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: daySeventeenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(daySeventeenInv),
        TotalItemSold: Number(daySeventeenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-18T00:00:00`,
        TransactionAmount: Number(dayEighteenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayEighteenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayEighteenInv),
        TotalItemSold: Number(dayEighteenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-19T00:00:00`,
        TransactionAmount: Number(dayNineteenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayNineteenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayNineteenInv),
        TotalItemSold: Number(dayNineteenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-20T00:00:00`,
        TransactionAmount: Number(dayTwentyAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentyComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentyInv),
        TotalItemSold: Number(dayTwentyItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-21T00:00:00`,
        TransactionAmount: Number(dayTwentyoneAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentyoneComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentyoneInv),
        TotalItemSold: Number(dayTwentyoneItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-22T00:00:00`,
        TransactionAmount: Number(dayTwentytwoAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentytwoComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentytwoInv),
        TotalItemSold: Number(dayTwentytwoItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-23T00:00:00`,
        TransactionAmount: Number(dayTwentythreeAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentythreeComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentythreeInv),
        TotalItemSold: Number(dayTwentythreeItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-24T00:00:00`,
        TransactionAmount: Number(dayTwentyfourAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentyfourComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentyfourInv),
        TotalItemSold: Number(dayTwentyfourItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-25T00:00:00`,
        TransactionAmount: Number(dayTwentyfiveAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentyfiveComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentyfiveInv),
        TotalItemSold: Number(dayTwentyfiveItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-26T00:00:00`,
        TransactionAmount: Number(dayTwentysixAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentysixComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentysixInv),
        TotalItemSold: Number(dayTwentysixItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-27T00:00:00`,
        TransactionAmount: Number(dayTwentysevenAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentysevenComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentysevenInv),
        TotalItemSold: Number(dayTwentysevenItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-28T00:00:00`,
        TransactionAmount: Number(dayTwentyeightAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentyeightComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentyeightInv),
        TotalItemSold: Number(dayTwentyeightItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },

      {
        TransactionId: 0,
        TransactionNumber: null,
        TransactionDate: `${currentYear}-${
          String(currentMonth + 1).length === 1
            ? `0${currentMonth + 1}`
            : currentMonth
        }-29T00:00:00`,
        TransactionAmount: Number(dayTwentynineAmount),
        LeaseCode: "t0001235",
        PropertyCode: "mgb",
        Year: 0,
        TransactionType: 1,
        CreatedUserId: 0,
        CreatedByEmail: null,
        CustomerCode: null,
        FileAttachmentBase64: null,
        FileAttachmentTitle: null,
        FileAttachmentContentType: null,
        SaleTransactionComments: dayTwentynineComment,
        SaleTransactionStatus: 2,
        SaleTransactionSource: 1,
        TotalInvoices: Number(dayTwentynineInv),
        TotalItemSold: Number(dayTwentynineItemSold),
        PropertyName: null,
        ModifiedBy: 0,
        ModifiedByName: null,
        TransactionAmount_Str: null,
        TotalInvoices_Str: null,
        TotalItemSold_Str: null,
        SubmissionDate: "0001-01-01T00:00:00",
        SubmissionDate_Str: null,
        SalesTypeCode: "fnb",
      },
    ],

    PropertyName: null,
    LeaseUnitCode: null,
    LeaseBrandName: null,
    TransactionYear: null,
    TransactionDate_Str: null,
    SaleTransactionStatus_Str: null,
    Day: 0,
    Month: 0,
    Year: 0,
    RequestNumber: null,
    ContactCode: null,
    CreatedUserId: 0,
    CreatedByEmail: null,
    SalesType: null,
    TransactionTypeStr: null,
    SaleTransactionSourceStr: null,
    GrandTotalTransactionAmount: 0,
    GrandTotalTransactionAmount_Str: null,
    GrandTotalTotalInvoices: 0,
    GrandTotalTotalInvoices_Str: null,
    GrandTotalTotalItemSold: 0,
    GrandTotalTotalItemSold_Str: null,
  };

  const url = "http://localhost:3000/post-daily-sales";

  const headers = {
    tenant: "mgb.map.eaglehills.com",
    "Ocp-Apim-Subscription-Key": "b652a304ec8143f8aeb8a879c9911f45",
    Authorization: token,
  };

  const sendToBackend = async () => {
    try {
      if (daysInMonth == 28) {
        const response = await axios.post(url, body28, { headers });
        setData(response.data);
        console.log("Response from backend:", response.data);
      } else if (daysInMonth == 29) {
        const response = await axios.post(url, body29, { headers });
        setData(response.data);
        console.log("Response from backend:", response.data);
      } else if (daysInMonth == 30) {
        const response = await axios.post(url, body30, { headers });
        setData(response.data);
        console.log("Response from backend:", response.data);
      } else if (daysInMonth == 31) {
        const response = await axios.post(url, body31, { headers });
        setData(response.data);
        console.log("Response from backend:", response.data);
      }
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };
  // const handleSubmit = async (e) => {
  //   if (daysInMonth === 28) {
  //     try {
  //       const response = await axios.post(url, body28, { headers });
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   } else if (daysInMonth === 29) {
  //     try {
  //       const response = await axios.post(url, body29, { headers });
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   } else if (daysInMonth === 30) {
  //     try {
  //       const response = await axios.post(url, body30, { headers });
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   } else if (daysInMonth === 31) {
  //     try {
  //       const response = await axios.post(url, body31, { headers });
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   } else {
  //     console.log("days in month can't be more than 31 or less than 28");
  //   }
  // };

  return (
    <>
      <div className="w-4/5 flex flex-col items-start text-left">
        <input
          type="text"
          className="w-full py-5 mb-40 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
          placeholder="Enter comment ... (optional)"
          onChange={(e) => {
            setMainComment(e.target.value);
          }}
          required
        />
        <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
          1 - {currentMonth + 1} - {currentYear}
        </h3>
        <div className="flex w-full items-start space-x-10 pb-5">
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Sold Items"
            onChange={(e) => {
              setDayOneItemSold(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Invoices"
            onChange={(e) => {
              setDayOneInv(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Transaction Amount"
            onChange={(e) => {
              setDayOneAmount(e.target.value);
            }}
            required
          />
        </div>
        <input
          type="text"
          className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
          placeholder="Any Comments ... (optional)"
          onChange={(e) => {
            setDayOneComment(e.target.value);
          }}
        />
      </div>
      <div className="w-4/5 flex flex-col items-start text-left">
        <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
          02 - {currentMonth + 1} - {currentYear}
        </h3>
        <div className="flex w-full items-start space-x-10 pb-5">
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Sold Items"
            onChange={(e) => {
              setDayTwoItemSold(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Invoices"
            onChange={(e) => {
              setDayTwoInv(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Transaction Amount"
            onChange={(e) => {
              setDayTwoAmount(e.target.value);
            }}
            required
          />
        </div>
        <input
          type="text"
          className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
          placeholder="Any Comments ... (optional)"
          onChange={(e) => {
            setDayTwoComment(e.target.value);
          }}
        />
      </div>
      <div className="w-4/5 flex flex-col items-start text-left">
        <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
          03 - {currentMonth + 1} - {currentYear}
        </h3>
        <div className="flex w-full items-start space-x-10 pb-5">
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Sold Items"
            onChange={(e) => {
              setDayThreeItemSold(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Invoices"
            onChange={(e) => {
              setDayThreeInv(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Transaction Amount"
            onChange={(e) => {
              setDayThreeAmount(e.target.value);
            }}
            required
          />
        </div>
        <input
          type="text"
          className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
          placeholder="Any Comments ... (optional)"
          onChange={(e) => {
            setDayThreeComment(e.target.value);
          }}
        />
      </div>
      <div className="w-4/5 flex flex-col items-start text-left">
        <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
          04 - {currentMonth + 1} - {currentYear}
        </h3>
        <div className="flex w-full items-start space-x-10 pb-5">
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Sold Items"
            onChange={(e) => {
              setDayFourItemSold(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Invoices"
            onChange={(e) => {
              setDayFourInv(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Transaction Amount"
            onChange={(e) => {
              setDayFourAmount(e.target.value);
            }}
            required
          />
        </div>
        <input
          type="text"
          className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
          placeholder="Any Comments ... (optional)"
          onChange={(e) => {
            setDayFourComment(e.target.value);
          }}
        />
      </div>
      <div className="w-4/5 flex flex-col items-start text-left">
        <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
          05 - {currentMonth + 1} - {currentYear}
        </h3>
        <div className="flex w-full items-start space-x-10 pb-5">
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Sold Items"
            onChange={(e) => {
              setDayFiveItemSold(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Invoices"
            onChange={(e) => {
              setDayFiveInv(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Transaction Amount"
            onChange={(e) => {
              setDayFiveAmount(e.target.value);
            }}
            required
          />
        </div>
        <input
          type="text"
          className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
          placeholder="Any Comments ... (optional)"
          onChange={(e) => {
            setDayFiveComment(e.target.value);
          }}
        />
      </div>
      <div className="w-4/5 flex flex-col items-start text-left">
        <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
          06 - {currentMonth + 1} - {currentYear}
        </h3>
        <div className="flex w-full items-start space-x-10 pb-5">
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Sold Items"
            onChange={(e) => {
              setDaySixItemSold(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Invoices"
            onChange={(e) => {
              setDaySixInv(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Transaction Amount"
            onChange={(e) => {
              setDaySixAmount(e.target.value);
            }}
            required
          />
        </div>
        <input
          type="text"
          className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
          placeholder="Any Comments ... (optional)"
          onChange={(e) => {
            setDaySixComment(e.target.value);
          }}
        />
      </div>
      <div className="w-4/5 flex flex-col items-start text-left">
        <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
          07 - {currentMonth + 1} - {currentYear}
        </h3>
        <div className="flex w-full items-start space-x-10 pb-5">
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Sold Items"
            onChange={(e) => {
              setDaySevenItemSold(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Invoices"
            onChange={(e) => {
              setDaySevenInv(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Transaction Amount"
            onChange={(e) => {
              setDaySevenAmount(e.target.value);
            }}
            required
          />
        </div>
        <input
          type="text"
          className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
          placeholder="Any Comments ... (optional)"
          onChange={(e) => {
            setDaySevenComment(e.target.value);
          }}
        />
      </div>
      <div className="w-4/5 flex flex-col items-start text-left">
        <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
          08 - {currentMonth + 1} - {currentYear}
        </h3>
        <div className="flex w-full items-start space-x-10 pb-5">
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Sold Items"
            onChange={(e) => {
              setDayEightItemSold(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Invoices"
            onChange={(e) => {
              setDayEightInv(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Transaction Amount"
            onChange={(e) => {
              setDayEightAmount(e.target.value);
            }}
            required
          />
        </div>
        <input
          type="text"
          className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
          placeholder="Any Comments ... (optional)"
          onChange={(e) => {
            setDayEightComment(e.target.value);
          }}
        />
      </div>
      <div className="w-4/5 flex flex-col items-start text-left">
        <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
          09 - {currentMonth + 1} - {currentYear}
        </h3>
        <div className="flex w-full items-start space-x-10 pb-5">
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Sold Items"
            onChange={(e) => {
              setDayNineItemSold(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Invoices"
            onChange={(e) => {
              setDayNineInv(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Transaction Amount"
            onChange={(e) => {
              setDayNineAmount(e.target.value);
            }}
            required
          />
        </div>
        <input
          type="text"
          className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
          placeholder="Any Comments ... (optional)"
          onChange={(e) => {
            setDayNineComment(e.target.value);
          }}
        />
      </div>
      <div className="w-4/5 flex flex-col items-start text-left">
        <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
          10 - {currentMonth + 1} - {currentYear}
        </h3>
        <div className="flex w-full items-start space-x-10 pb-5">
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Sold Items"
            onChange={(e) => {
              setDayTenItemSold(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Invoices"
            onChange={(e) => {
              setDayTenInv(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Transaction Amount"
            onChange={(e) => {
              setDayTenAmount(e.target.value);
            }}
            required
          />
        </div>
        <input
          type="text"
          className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
          placeholder="Any Comments ... (optional)"
          onChange={(e) => {
            setDayTenComment(e.target.value);
          }}
        />
      </div>
      <div className="w-4/5 flex flex-col items-start text-left">
        <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
          11 - {currentMonth + 1} - {currentYear}
        </h3>
        <div className="flex w-full items-start space-x-10 pb-5">
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Sold Items"
            onChange={(e) => {
              setDayElevenItemSold(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Invoices"
            onChange={(e) => {
              setDayElevenInv(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Transaction Amount"
            onChange={(e) => {
              setDayElevenAmount(e.target.value);
            }}
            required
          />
        </div>
        <input
          type="text"
          className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
          placeholder="Any Comments ... (optional)"
          onChange={(e) => {
            setDayElevenComment(e.target.value);
          }}
        />
      </div>
      <div className="w-4/5 flex flex-col items-start text-left">
        <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
          12 - {currentMonth + 1} - {currentYear}
        </h3>
        <div className="flex w-full items-start space-x-10 pb-5">
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Sold Items"
            onChange={(e) => {
              setDayTwelveItemSold(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Invoices"
            onChange={(e) => {
              setDayTwelveInv(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Transaction Amount"
            onChange={(e) => {
              setDayTwelveAmount(e.target.value);
            }}
            required
          />
        </div>
        <input
          type="text"
          className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
          placeholder="Any Comments ... (optional)"
          onChange={(e) => {
            setDayTwelveComment(e.target.value);
          }}
        />
      </div>
      <div className="w-4/5 flex flex-col items-start text-left">
        <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
          13 - {currentMonth + 1} - {currentYear}
        </h3>
        <div className="flex w-full items-start space-x-10 pb-5">
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Sold Items"
            onChange={(e) => {
              setDayThirteenItemSold(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Invoices"
            onChange={(e) => {
              setDayThirteenInv(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Transaction Amount"
            onChange={(e) => {
              setDayThirteenAmount(e.target.value);
            }}
            required
          />
        </div>
        <input
          type="text"
          className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
          placeholder="Any Comments ... (optional)"
          onChange={(e) => {
            setDayThirteenComment(e.target.value);
          }}
        />
      </div>
      <div className="w-4/5 flex flex-col items-start text-left">
        <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
          14 - {currentMonth + 1} - {currentYear}
        </h3>
        <div className="flex w-full items-start space-x-10 pb-5">
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Sold Items"
            onChange={(e) => {
              setDayFourteenItemSold(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Invoices"
            onChange={(e) => {
              setDayFourteenInv(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Transaction Amount"
            onChange={(e) => {
              setDayFourteenAmount(e.target.value);
            }}
            required
          />
        </div>
        <input
          type="text"
          className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
          placeholder="Any Comments ... (optional)"
          onChange={(e) => {
            setDayFourteenComment(e.target.value);
          }}
        />
      </div>
      <div className="w-4/5 flex flex-col items-start text-left">
        <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
          15 - {currentMonth + 1} - {currentYear}
        </h3>
        <div className="flex w-full items-start space-x-10 pb-5">
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Sold Items"
            onChange={(e) => {
              setDayFifteenItemSold(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Invoices"
            onChange={(e) => {
              setDayFifteenInv(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Transaction Amount"
            onChange={(e) => {
              setDayFifteenAmount(e.target.value);
            }}
            required
          />
        </div>
        <input
          type="text"
          className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
          placeholder="Any Comments ... (optional)"
          onChange={(e) => {
            setDayFifteenComment(e.target.value);
          }}
        />
      </div>
      <div className="w-4/5 flex flex-col items-start text-left">
        <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
          16 - {currentMonth + 1} - {currentYear}
        </h3>
        <div className="flex w-full items-start space-x-10 pb-5">
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Sold Items"
            onChange={(e) => {
              setDaySixteenItemSold(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Invoices"
            onChange={(e) => {
              setDaySixteenInv(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Transaction Amount"
            onChange={(e) => {
              setDaySixteenAmount(e.target.value);
            }}
            required
          />
        </div>
        <input
          type="text"
          className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
          placeholder="Any Comments ... (optional)"
          onChange={(e) => {
            setDaySixteenComment(e.target.value);
          }}
        />
      </div>
      <div className="w-4/5 flex flex-col items-start text-left">
        <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
          17 - {currentMonth + 1} - {currentYear}
        </h3>
        <div className="flex w-full items-start space-x-10 pb-5">
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Sold Items"
            onChange={(e) => {
              setDaySeventeenItemSold(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Invoices"
            onChange={(e) => {
              setDaySeventeenInv(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Transaction Amount"
            onChange={(e) => {
              setDaySeventeenAmount(e.target.value);
            }}
            required
          />
        </div>
        <input
          type="text"
          className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
          placeholder="Any Comments ... (optional)"
          onChange={(e) => {
            setDaySeventeenComment(e.target.value);
          }}
        />
      </div>
      <div className="w-4/5 flex flex-col items-start text-left">
        <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
          18 - {currentMonth + 1} - {currentYear}
        </h3>
        <div className="flex w-full items-start space-x-10 pb-5">
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Sold Items"
            onChange={(e) => {
              setDayEighteenItemSold(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Invoices"
            onChange={(e) => {
              setDayEighteenInv(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Transaction Amount"
            onChange={(e) => {
              setDayEighteenAmount(e.target.value);
            }}
            required
          />
        </div>
        <input
          type="text"
          className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
          placeholder="Any Comments ... (optional)"
          onChange={(e) => {
            setDayEighteenComment(e.target.value);
          }}
        />
      </div>
      <div className="w-4/5 flex flex-col items-start text-left">
        <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
          19 - {currentMonth + 1} - {currentYear}
        </h3>
        <div className="flex w-full items-start space-x-10 pb-5">
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Sold Items"
            onChange={(e) => {
              setDayNineteenItemSold(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Invoices"
            onChange={(e) => {
              setDayNineteenInv(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Transaction Amount"
            onChange={(e) => {
              setDayNineteenAmount(e.target.value);
            }}
            required
          />
        </div>
        <input
          type="text"
          className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
          placeholder="Any Comments ... (optional)"
          onChange={(e) => {
            setDayNineteenComment(e.target.value);
          }}
        />
      </div>
      <div className="w-4/5 flex flex-col items-start text-left">
        <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
          20 - {currentMonth + 1} - {currentYear}
        </h3>
        <div className="flex w-full items-start space-x-10 pb-5">
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Sold Items"
            onChange={(e) => {
              setDayTwentyItemSold(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Invoices"
            onChange={(e) => {
              setDayTwentyInv(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Transaction Amount"
            onChange={(e) => {
              setDayTwentyAmount(e.target.value);
            }}
            required
          />
        </div>
        <input
          type="text"
          className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
          placeholder="Any Comments ... (optional)"
          onChange={(e) => {
            setDayTwentyComment(e.target.value);
          }}
        />
      </div>
      <div className="w-4/5 flex flex-col items-start text-left">
        <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
          21 - {currentMonth + 1} - {currentYear}
        </h3>
        <div className="flex w-full items-start space-x-10 pb-5">
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Sold Items"
            onChange={(e) => {
              setDayTwentyoneItemSold(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Invoices"
            onChange={(e) => {
              setDayTwentyoneInv(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Transaction Amount"
            onChange={(e) => {
              setDayTwentyoneAmount(e.target.value);
            }}
            required
          />
        </div>
        <input
          type="text"
          className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
          placeholder="Any Comments ... (optional)"
          onChange={(e) => {
            setDayTwentyoneComment(e.target.value);
          }}
        />
      </div>
      <div className="w-4/5 flex flex-col items-start text-left">
        <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
          22 - {currentMonth + 1} - {currentYear}
        </h3>
        <div className="flex w-full items-start space-x-10 pb-5">
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Sold Items"
            onChange={(e) => {
              setDayTwentytwoItemSold(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Invoices"
            onChange={(e) => {
              setDayTwentytwoInv(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Transaction Amount"
            onChange={(e) => {
              setDayTwentytwoAmount(e.target.value);
            }}
            required
          />
        </div>
        <input
          type="text"
          className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
          placeholder="Any Comments ... (optional)"
          onChange={(e) => {
            setDayTwentytwoComment(e.target.value);
          }}
        />
      </div>
      <div className="w-4/5 flex flex-col items-start text-left">
        <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
          23 - {currentMonth + 1} - {currentYear}
        </h3>
        <div className="flex w-full items-start space-x-10 pb-5">
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Sold Items"
            onChange={(e) => {
              setDayTwentythreeItemSold(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Invoices"
            onChange={(e) => {
              setDayTwentythreeInv(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Transaction Amount"
            onChange={(e) => {
              setDayTwentythreeAmount(e.target.value);
            }}
            required
          />
        </div>
        <input
          type="text"
          className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
          placeholder="Any Comments ... (optional)"
          onChange={(e) => {
            setDayTwentythreeComment(e.target.value);
          }}
        />
      </div>
      <div className="w-4/5 flex flex-col items-start text-left">
        <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
          24 - {currentMonth + 1} - {currentYear}
        </h3>
        <div className="flex w-full items-start space-x-10 pb-5">
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Sold Items"
            onChange={(e) => {
              setDayTwentyfourItemSold(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Invoices"
            onChange={(e) => {
              setDayTwentyfourInv(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Transaction Amount"
            onChange={(e) => {
              setDayTwentyfourAmount(e.target.value);
            }}
            required
          />
        </div>
        <input
          type="text"
          className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
          placeholder="Any Comments ... (optional)"
          onChange={(e) => {
            setDayTwentyfourComment(e.target.value);
          }}
        />
      </div>
      <div className="w-4/5 flex flex-col items-start text-left">
        <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
          25 - {currentMonth + 1} - {currentYear}
        </h3>
        <div className="flex w-full items-start space-x-10 pb-5">
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Sold Items"
            onChange={(e) => {
              setDayTwentyfiveItemSold(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Invoices"
            onChange={(e) => {
              setDayTwentyfiveInv(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Transaction Amount"
            onChange={(e) => {
              setDayTwentyfiveAmount(e.target.value);
            }}
            required
          />
        </div>
        <input
          type="text"
          className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
          placeholder="Any Comments ... (optional)"
          onChange={(e) => {
            setDayTwentyfiveComment(e.target.value);
          }}
        />
      </div>
      <div className="w-4/5 flex flex-col items-start text-left">
        <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
          26 - {currentMonth + 1} - {currentYear}
        </h3>
        <div className="flex w-full items-start space-x-10 pb-5">
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Sold Items"
            onChange={(e) => {
              setDayTwentysixItemSold(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Invoices"
            onChange={(e) => {
              setDayTwentysixInv(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Transaction Amount"
            onChange={(e) => {
              setDayTwentysixAmount(e.target.value);
            }}
            required
          />
        </div>
        <input
          type="text"
          className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
          placeholder="Any Comments ... (optional)"
          onChange={(e) => {
            setDayTwentysixComment(e.target.value);
          }}
        />
      </div>
      <div className="w-4/5 flex flex-col items-start text-left">
        <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
          27 - {currentMonth + 1} - {currentYear}
        </h3>
        <div className="flex w-full items-start space-x-10 pb-5">
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Sold Items"
            onChange={(e) => {
              setDayTwentysevenItemSold(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Invoices"
            onChange={(e) => {
              setDayTwentysevenInv(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Transaction Amount"
            onChange={(e) => {
              setDayTwentysevenAmount(e.target.value);
            }}
            required
          />
        </div>
        <input
          type="text"
          className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
          placeholder="Any Comments ... (optional)"
          onChange={(e) => {
            setDayTwentysevenComment(e.target.value);
          }}
        />
      </div>
      <div className="w-4/5 flex flex-col items-start text-left">
        <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
          28 - {currentMonth + 1} - {currentYear}
        </h3>
        <div className="flex w-full items-start space-x-10 pb-5">
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Sold Items"
            onChange={(e) => {
              setDayTwentyeightItemSold(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Number of Invoices"
            onChange={(e) => {
              setDayTwentyeightInv(e.target.value);
            }}
            required
          />
          <input
            type="number"
            min="0"
            className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Transaction Amount"
            onChange={(e) => {
              setDayTwentyeightAmount(e.target.value);
            }}
            required
          />
        </div>
        <input
          type="text"
          className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
          placeholder="Any Comments ... (optional)"
          onChange={(e) => {
            setDayTwentyeightComment(e.target.value);
          }}
        />
      </div>
      {daysInMonth === 29 ? (
        <div className="w-4/5 flex flex-col items-start text-left">
          <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
            29 - {currentMonth + 1} - {currentYear}
          </h3>
          <div className="flex w-full items-start space-x-10 pb-5">
            <input
              type="number"
              min="0"
              className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
              placeholder="Number of Sold Items"
              onChange={(e) => {
                setDayTwentynineItemSold(e.target.value);
              }}
              required
            />
            <input
              type="number"
              min="0"
              className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
              placeholder="Number of Invoices"
              onChange={(e) => {
                setDayTwentynineInv(e.target.value);
              }}
              required
            />
            <input
              type="number"
              min="0"
              className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
              placeholder="Transaction Amount"
              onChange={(e) => {
                setDayTwentynineAmount(e.target.value);
              }}
              required
            />
          </div>
          <input
            type="text"
            className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
            placeholder="Any Comments ... (optional)"
            onChange={(e) => {
              setDayTwentynineComment(e.target.value);
            }}
          />
        </div>
      ) : daysInMonth === 30 ? (
        <>
          <div className="w-4/5 flex flex-col items-start text-left">
            <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
              29 - {currentMonth + 1} - {currentYear}
            </h3>
            <div className="flex w-full items-start space-x-10 pb-5">
              <input
                type="number"
                min="0"
                className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
                placeholder="Number of Sold Items"
                onChange={(e) => {
                  setDayTwentynineItemSold(e.target.value);
                }}
                required
              />
              <input
                type="number"
                min="0"
                className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
                placeholder="Number of Invoices"
                onChange={(e) => {
                  setDayTwentynineInv(e.target.value);
                }}
                required
              />
              <input
                type="number"
                min="0"
                className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
                placeholder="Transaction Amount"
                onChange={(e) => {
                  setDayTwentynineAmount(e.target.value);
                }}
                required
              />
            </div>
            <input
              type="text"
              className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
              placeholder="Any Comments ... (optional)"
              onChange={(e) => {
                setDayTwentynineComment(e.target.value);
              }}
            />
          </div>
          <div className="w-4/5 flex flex-col items-start text-left">
            <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
              30 - {currentMonth + 1} - {currentYear}
            </h3>
            <div className="flex w-full items-start space-x-10 pb-5">
              <input
                type="number"
                min="0"
                className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
                placeholder="Number of Sold Items"
                onChange={(e) => {
                  setDayThirtyItemSold(e.target.value);
                }}
                required
              />
              <input
                type="number"
                min="0"
                className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
                placeholder="Number of Invoices"
                onChange={(e) => {
                  setDayThirtyInv(e.target.value);
                }}
                required
              />
              <input
                type="number"
                min="0"
                className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
                placeholder="Transaction Amount"
                onChange={(e) => {
                  setDayThirtyAmount(e.target.value);
                }}
                required
              />
            </div>
            <input
              type="text"
              className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
              placeholder="Any Comments ... (optional)"
              onChange={(e) => {
                setDayThirtyComment(e.target.value);
              }}
            />
          </div>
        </>
      ) : daysInMonth === 31 ? (
        <>
          <div className="w-4/5 flex flex-col items-start text-left">
            <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
              29 - {currentMonth + 1} - {currentYear}
            </h3>
            <div className="flex w-full items-start space-x-10 pb-5">
              <input
                type="number"
                min="0"
                className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
                placeholder="Number of Sold Items"
                onChange={(e) => {
                  setDayTwentynineItemSold(e.target.value);
                }}
                required
              />
              <input
                type="number"
                min="0"
                className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
                placeholder="Number of Invoices"
                onChange={(e) => {
                  setDayTwentynineInv(e.target.value);
                }}
                required
              />
              <input
                type="number"
                min="0"
                className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
                placeholder="Transaction Amount"
                onChange={(e) => {
                  setDayTwentynineAmount(e.target.value);
                }}
                required
              />
            </div>
            <input
              type="text"
              className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
              placeholder="Any Comments ... (optional)"
              onChange={(e) => {
                setDayTwentynineComment(e.target.value);
              }}
            />
          </div>
          <div className="w-4/5 flex flex-col items-start text-left">
            <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
              30 - {currentMonth + 1} - {currentYear}
            </h3>
            <div className="flex w-full items-start space-x-10 pb-5">
              <input
                type="number"
                min="0"
                className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
                placeholder="Number of Sold Items"
                onChange={(e) => {
                  setDayThirtyItemSold(e.target.value);
                }}
                required
              />
              <input
                type="number"
                min="0"
                className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
                placeholder="Number of Invoices"
                onChange={(e) => {
                  setDayThirtyInv(e.target.value);
                }}
                required
              />
              <input
                type="number"
                min="0"
                className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
                placeholder="Transaction Amount"
                onChange={(e) => {
                  setDayThirtyAmount(e.target.value);
                }}
                required
              />
            </div>
            <input
              type="text"
              className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
              placeholder="Any Comments ... (optional)"
              onChange={(e) => {
                setDayThirtyComment(e.target.value);
              }}
            />
          </div>
          <div className="w-4/5 flex flex-col items-start text-left">
            <h3 className="self-left text-[#fff] text-xl mb-3 tracking-widest">
              31 - {currentMonth + 1} - {currentYear}
            </h3>
            <div className="flex w-full items-start space-x-10 pb-5">
              <input
                type="number"
                min="0"
                className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
                placeholder="Number of Sold Items"
                onChange={(e) => {
                  setDayThirtyoneItemSold(e.target.value);
                }}
                required
              />
              <input
                type="number"
                min="0"
                className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
                placeholder="Number of Invoices"
                onChange={(e) => {
                  setDayThirtyoneInv(e.target.value);
                }}
                required
              />
              <input
                type="number"
                min="0"
                className="w-2/6 py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
                placeholder="Transaction Amount"
                onChange={(e) => {
                  setDayThirtyoneAmount(e.target.value);
                }}
                required
              />
            </div>
            <input
              type="text"
              className="w-full py-5 border-b-[1px] border-[#fff] px-3 bg-[rgba(255,255,255,0.85)] placeholder:text-[#000] text-[#000]"
              placeholder="Any Comments ... (optional)"
              onChange={(e) => {
                setDayThirtyoneComment(e.target.value);
              }}
            />
          </div>
        </>
      ) : (
        <></>
      )}
      <div className="w-full py-10 space-x-10">
        <button
          className="cbtn"
          data-another-text="Send Daily Sales"
          onClick={sendToBackend}
        >
          Submit
        </button>
        <Link to={"/"}>
          <button className="cbtn" data-another-text="Back to home">
            Cancel
          </button>
        </Link>
      </div>
    </>
  );
};
export default Form;
