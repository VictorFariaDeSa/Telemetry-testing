#include <ArduinoJson.h>

int temp;
int value;

void setup() {
  Serial.begin(9600);
  pinMode(A0, INPUT);
}

void loop() {
  value = map(analogRead(A0), 0, 1023, 0, 100);
  if (temp != value) {
    DynamicJsonDocument doc(1024);
    doc["Data"] = value;
    serializeJson(doc, Serial);
    Serial.println();  // Adicione uma nova linha após a impressão JSON
    temp = value;
    delay(10);
  }
}
