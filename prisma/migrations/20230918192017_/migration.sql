-- CreateTable
CREATE TABLE "quotation_request" (
    "id" SERIAL NOT NULL,
    "quotation_date" DATE NOT NULL,
    "quotation_number" INTEGER,
    "client_name" TEXT NOT NULL,
    "client_email" TEXT,
    "client_adress" TEXT,
    "quotation_description" TEXT,
    "project_preview" TEXT,
    "quotation_total_amount" INTEGER NOT NULL,
    "quotation_method_payment" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "quotation_request_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_unique" ON "users"("email");

-- AddForeignKey
ALTER TABLE "quotation_request" ADD CONSTRAINT "quotation_request_userid_foreign" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
