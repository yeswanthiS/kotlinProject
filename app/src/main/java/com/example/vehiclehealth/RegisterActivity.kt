package com.example.vehiclehealth

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import com.android.volley.Request
import com.android.volley.RequestQueue
import com.android.volley.Response
import com.android.volley.toolbox.StringRequest
import com.android.volley.toolbox.Volley
import org.json.JSONObject

class RegisterActivity : AppCompatActivity() {
    private lateinit var vehicleNumberEditText: EditText
    private lateinit var chassisNumberEditText: EditText
    private lateinit var aadharNumberEditText: EditText
    private lateinit var nameEditText: EditText
    private lateinit var mobileNumberEditText: EditText
    private lateinit var registerSubmitButton: Button
    private lateinit var queue: RequestQueue

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_register)

        vehicleNumberEditText = findViewById(R.id.vehicleNumberEditText)
        chassisNumberEditText = findViewById(R.id.chassisNumberEditText)
        aadharNumberEditText = findViewById(R.id.aadharNumberEditText)
        nameEditText = findViewById(R.id.nameEditText)
        mobileNumberEditText = findViewById(R.id.mobileNumberEditText)
        registerSubmitButton = findViewById(R.id.registerSubmitButton)
        queue = Volley.newRequestQueue(this)

        registerSubmitButton.setOnClickListener {
            val vehicleNumber = vehicleNumberEditText.text.toString()
            val chassisNumber = chassisNumberEditText.text.toString()
            val aadharNumber = aadharNumberEditText.text.toString()
            val name = nameEditText.text.toString()
            val mobileNumber = mobileNumberEditText.text.toString()

            val url = "https://kotlinproject.onrender.com/register"

            val jsonObject = JSONObject()
            jsonObject.put("vehicleNumber", vehicleNumber)
            jsonObject.put("chassisNumber", chassisNumber)
            jsonObject.put("aadharNumber", aadharNumber)
            jsonObject.put("name", name)
            jsonObject.put("mobileNumber", mobileNumber)

            val stringRequest = StringRequest(Request.Method.POST, url,
                { response ->

                    Toast.makeText(this, "Registration successful", Toast.LENGTH_SHORT).show()
                },
                { error ->

                    Toast.makeText(this, "Registration failed", Toast.LENGTH_SHORT).show()
                })

            queue.add(stringRequest)
        }
    }
}